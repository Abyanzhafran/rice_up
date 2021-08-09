import { collection } from 'firebase/firestore';
import { FirestoreClientRepository, FirestoreClientRepositoryCtor } from 'core/FirestoreClient/Repository';
import type { Firestore, CollectionReference } from 'firebase/firestore';
import type { Model } from 'core/Model';

interface FirestoreClientRepositoryFactoryConfig {
  collectionName: string;
}

export const createFirestoreClientRepository = function <M extends Model> ({ collectionName }: FirestoreClientRepositoryFactoryConfig) {
  return class extends FirestoreClientRepository<M> {
    constructor(private firestore: Firestore) {
      super(collection(firestore, collectionName) as CollectionReference<M>);
    }
  } as FirestoreClientRepositoryCtor<M>;
};
