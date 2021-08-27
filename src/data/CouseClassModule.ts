import { collection } from 'firebase/firestore';
import firebaseNamespaces from 'app/shared/firebaseNamespaces';
import { CourseClass } from 'src/data/CourseClass';
import type { DocumentReference, CollectionReference } from 'firebase/firestore';
import type { Model } from 'src/data/base';
import type { ModelDataType } from 'src/data/types';

export interface CourseClassModule extends Model {
  title: ModelDataType.String;
  content: ModelDataType.String;
}

export const CourseClassModuleCollection = (courseDoc: DocumentReference<CourseClass>) => collection(
  courseDoc,
  firebaseNamespaces.CourseClassModules,
) as CollectionReference<CourseClassModule>;
