import { collection } from 'firebase/firestore';
import firebaseNamespaces from '../../../shared/firebaseNamespaces';
import { User } from './User';
import type { DocumentReference, CollectionReference } from 'firebase/firestore';
import type { Model } from './base';
import type { ModelDataType } from './types';

export interface MyCourseClass extends Model {
  course: ModelDataType.Ref<{
    name: ModelDataType.String;
    slug: ModelDataType.String;
    trainerName: ModelDataType.String;
  }>;
  progress: ModelDataType.List<{
    /** 1 to 100 */
    completion: ModelDataType.Number;
    module: ModelDataType.Ref<{
      name: ModelDataType.String;
    }>;
  }>;
  /**  computed value, counted from progress.completion */
  completed: ModelDataType.Bool;
}

export const MyCourseClassCollection = (userDoc: DocumentReference<User>) => collection(
  userDoc,
  firebaseNamespaces.MyCourseClasses,
) as CollectionReference<MyCourseClass>;
