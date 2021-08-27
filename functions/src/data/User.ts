import { db } from '../services/firebase';
import firebaseNamespaces from '../../../shared/firebaseNamespaces';
import type { firestore } from 'firebase-admin';
import type { Model } from './base';
import type { ModelDataType } from './types';

export interface User extends Model {
  name: ModelDataType.String;
  email: ModelDataType.String;
}

export const UserCollection = db.collection(firebaseNamespaces.Users) as firestore.CollectionReference<User>;
