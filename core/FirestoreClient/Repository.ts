import {
  doc, getDoc, getDocs, addDoc, updateDoc, query, where,
} from 'firebase/firestore';
import type {
  DocumentReference, CollectionReference, QueryDocumentSnapshot, SnapshotOptions,
  Query, FirestoreDataConverter, Firestore,
} from 'firebase/firestore';
import { modelDataTypeToFirestoreDataType, firestoreDataTypeToModelDataType } from 'core/FirestoreClient/Model';
import type { Model } from 'core/Model';
import type { ModelToFirestoreModel as ModelToFsModel } from 'core/FirestoreClient/Model';

export interface IFirestoreClientRepository<M extends Model> {
  get(id: string): Promise<M | undefined>;
  getAll(): Promise<M[]>;
  create(data: Omit<M, '_uid' | '_created' | '_updated' | '_deleted'>): Promise<() => Promise<M>>;
  update(data: Omit<Partial<M>, '_created' | '_updated' | '_deleted'> & Pick<M, '_uid'>): Promise<void>;
  delete(id: string): Promise<void>;
  restoreDeleted(id: string): Promise<() => Promise<M | undefined>>;
}

export interface FirestoreClientRepositoryCtor<M extends Model> {
  new (firestore: Firestore): IFirestoreClientRepository<M>
}

export class FirestoreClientRepository<M extends Model> implements IFirestoreClientRepository<M> {
  readonly converter: FirestoreDataConverter<M>;

  constructor(
    readonly collectionRef: CollectionReference<M>,
  ) {
    this.converter = FirestoreClientRepository.createConverter();
  }

  public async get(id: string) {
    const docRef = doc(this.collectionRef, id);
    const snap = await this._get(docRef);

    return snap.data();
  }

  public async getAll() {
    const snaps = await this._execQuery(this.collectionRef);

    return snaps.docs.map((snap) => snap.data());
  }

  public async create(data: Omit<M, '_uid' | '_created' | '_updated' | '_deleted'>) {
    const docRef = await addDoc(this._useRef(this.collectionRef), {
      ...data,
      ...FirestoreClientRepository.createAttrsFactory(),
    } as M);

    return this._getModelFactoryByRef(docRef) as () => Promise<M>;
  }

  public update({ _uid, ...data }: Omit<Partial<M>, '_created' | '_updated' | '_deleted'> & Pick<M, '_uid'>) {
    const docRef = doc(this.collectionRef, _uid);

    // ensure the input using converter
    return updateDoc(this._useRef(docRef), {
      ...data,
      ...FirestoreClientRepository.updateAttrsFactory(),
    });
  }

  public delete(id: string) {
    const docRef = doc(this.collectionRef, id);

    return updateDoc(
      // ensure the input using converter
      this._useRef(docRef),
      FirestoreClientRepository.deleteAttrsFactory(),
    );
  }

  public async restoreDeleted(id: string) {
    const docRef = doc(this.collectionRef, id);

    void await updateDoc(
      // ensure the input using converter
      this._useRef(docRef),
      FirestoreClientRepository.restoreAttrsFactory(),
    );

    return this._getModelFactoryByRef(docRef);
  }

  public _get(docRef: DocumentReference<M>) {
    return getDoc(this._useRef(docRef));
  }

  public _getModelFactoryByRef(docRef: DocumentReference<M>) {
    const ref = this._useRef(docRef);

    return async () => {
      const snap = await getDoc(ref);

      return snap.data();
    };
  }

  public _execQuery(q: Query<M>, includeDeleted = false) {
    const finalQuery = includeDeleted
      ? q
      : query(q, where('_deleted', '==', null));

    return getDocs(this._useRef(finalQuery));
  }

  /**
   * @description just proxying for everything ref use
   */
  public _useRef<T extends CollectionReference<M> | DocumentReference<M> | Query<M>>(ref: T) {
    // bug? should use DocumentReference type assertion to get better `withConverter()` typings
    // it make me to use assertion again in the end 😑
    return (ref.withConverter as DocumentReference['withConverter'])(this.converter) as T;
  }

  public static createConverter<O extends Model>(): FirestoreDataConverter<O> {
    return {
      fromFirestore(snapshot: QueryDocumentSnapshot<ModelToFsModel<O>>, opts) {
        return FirestoreClientRepository.toObj<O>(snapshot, opts);
      },
      toFirestore(modelObj: O) {
        return FirestoreClientRepository.toFirestoreObj(modelObj);
      },
    };
  }

  public static toObj<O extends Model>(snapshot: QueryDocumentSnapshot<ModelToFsModel<O>>, opts?: SnapshotOptions) {
    const data = snapshot.data(opts);

    return Object.entries(data)
      .reduce((acc, [k, v]) => ({
        ...acc,
        [k]: firestoreDataTypeToModelDataType(v),
      }), { _uid: snapshot.id } as O);
  }

  public static toFirestoreObj<O extends Model>(obj: Partial<O>) {
    return Object.entries(obj)
      .reduce((acc, [k, v]) => {
        // skip `_uid` property
        if (k === '_uid') {
          return acc;
        }

        return {
          ...acc,
          [k]: modelDataTypeToFirestoreDataType(v),
        };
      }, {} as ModelToFsModel<O>);
  }

  public static createAttrsFactory() {
    return {
      _created: new Date(),
      _updated: new Date(),
      _deleted: null,
    };
  }

  public static updateAttrsFactory() {
    return {
      _updated: new Date(),
    };
  }

  public static deleteAttrsFactory() {
    return {
      _deleted: new Date(),
    };
  }

  public static restoreAttrsFactory() {
    return {
      _deleted: null,
    };
  }
}
