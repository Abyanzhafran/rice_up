import {
  getDocs, query, where, Timestamp,
} from 'firebase/firestore';
import { Model } from 'src/data/base';
import type { Query } from 'firebase/firestore';

export const attrFactories = {
  create() {
    const now = Timestamp.now();
    return {
      _created: now,
      _updated: now,
      _deleted: null,
    };
  },
  update() {
    const now = Timestamp.now();
    return {
      _updated: now,
    };
  },
  delete() {
    const now = Timestamp.now();
    return {
      _deleted: now,
    };
  },
  restore() {
    return {
      _deleted: null,
    };
  },
};

export class FirestoreUseCases {
  public static execQuery<M extends Model>(q: Query<M>, includeDeleted = false) {
    const finalQuery = includeDeleted
      ? q
      : query(q, where('_deleted', '==', null));

    return getDocs(finalQuery);
  }
}
