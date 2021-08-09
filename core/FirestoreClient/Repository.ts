import {
  doc, getDoc, getDocs, addDoc, updateDoc, query, where,
} from 'firebase/firestore';
import type {
  DocumentReference, CollectionReference, DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot, SnapshotOptions,
  Query, FirestoreDataConverter,
} from 'firebase/firestore';
import { modelDataTypeToFirestoreDataType, firestoreDataTypeToModelDataType } from 'core/FirestoreClient/Model';
import type { Model } from 'core/Model';
import type { ModelToFirestoreModel as ModelToFsModel } from 'core/FirestoreClient/Model';

export interface IFirestoreClientRepository<M extends Model> {
  getById(id: string): Promise<DocumentSnapshot<M>>;
  getAll(): Promise<QuerySnapshot<M>>;
  execQuery(q: Query<M>, includeDeleted: boolean): Promise<QuerySnapshot<M>>;
  create(data: M): Promise<DocumentReference<M>>;
  update(docRef: DocumentReference<M>, data: Partial<M>): Promise<void>;
  delete(docRef: DocumentReference<M>): Promise<void>;
}

export class FirestoreClientRepository<M extends Model> implements IFirestoreClientRepository<M> {
  readonly converter: FirestoreDataConverter<M>;

  constructor(
    readonly collectionRef: CollectionReference<M>,
  ) {
    this.converter = FirestoreClientRepository.createConverter();
  }

  public getById(id: string) {
    const docRef = doc(this.collectionRef, id);

    return this.get(docRef);
  }

  public getAll() {
    return this.execQuery(this.collectionRef);
  }

  public create(data: Omit<M, '_uid' | '_created' | '_updated' | '_deleted'>) {
    return addDoc(this.useRef(this.collectionRef), {
      ...data,
      ...FirestoreClientRepository.createAttrsFactory(),
    } as M);
  }

  public update(docRef: DocumentReference<M>, data: Partial<M>) {
    // ensure the input using converter
    return updateDoc(this.useRef(docRef), {
      ...data,
      ...FirestoreClientRepository.updateAttrsFactory(),
    });
  }

  public delete(docRef: DocumentReference<M>) {
    return updateDoc(
      // ensure the input using converter
      this.useRef(docRef),
      FirestoreClientRepository.deleteAttrsFactory(),
    );
  }

  public get(docRef: DocumentReference<M>) {
    return getDoc(this.useRef(docRef));
  }

  public execQuery(q: Query<M>, includeDeleted = false) {
    const finalQuery = includeDeleted
      ? q
      : query(q, where('_deleted', '==', null));

    return getDocs(this.useRef(finalQuery));
  }

  /**
   * @description just proxying for everything ref use
   */
  public useRef<T extends CollectionReference<M> | DocumentReference<M> | Query<M>>(ref: T) {
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
}
