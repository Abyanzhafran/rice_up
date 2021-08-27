import { collection } from 'firebase/firestore';
import firebaseNamespaces from 'app/shared/firebaseNamespaces';
import { User } from 'src/data/User';
import type { DocumentReference, CollectionReference } from 'firebase/firestore';
import type { Model } from 'src/data/base';
import type { ModelDataType } from 'src/data/types';
import type { CourseClass } from 'src/data/CourseClass';
import type { CourseClassModule } from 'src/data/CouseClassModule';

export interface MyCourseClass extends Model {
  course: ModelDataType.Ref<DocumentReference<CourseClass>, {
    name: ModelDataType.String;
    slug: ModelDataType.String;
    trainerName: ModelDataType.String;
  }>;
  progress: ModelDataType.List<{
    /** 1 to 100 */
    completion: ModelDataType.Number;
    module: ModelDataType.Ref<DocumentReference<CourseClassModule>, {
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
