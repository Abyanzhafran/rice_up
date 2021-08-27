import { collection } from 'firebase/firestore';
import firebaseNamespaces from 'app/shared/firebaseNamespaces';
import { db } from 'src/firebase';
import type { CollectionReference } from 'firebase/firestore';
import type { Model } from 'src/data/base';
import type { ModelDataType } from 'src/data/types';

export interface User extends Model {
  name: ModelDataType.String;
  email: ModelDataType.String;
}

export const UserCollection = collection(db, firebaseNamespaces.Users) as CollectionReference<User>;
