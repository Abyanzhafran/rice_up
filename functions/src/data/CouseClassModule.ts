import firebaseNamespaces from '../../../shared/firebaseNamespaces';
import { CourseClass } from './CourseClass';
import type { firestore } from 'firebase-admin';
import type { Model } from './base';
import type { ModelDataType } from './types';

export interface CourseClassModule extends Model {
  title: ModelDataType.String;
  content: ModelDataType.String;
}

export const CourseClassModuleCollection = (courseDoc: firestore.DocumentReference<CourseClass>) => courseDoc
  .collection(firebaseNamespaces.CourseClassModules) as firestore.CollectionReference<CourseClassModule>;
