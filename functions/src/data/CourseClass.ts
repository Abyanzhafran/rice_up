import { db } from '../services/firebase';
import firebaseNamespaces from '../../../shared/firebaseNamespaces';
import type { firestore } from 'firebase-admin';
import type { Model } from './base';
import type { ModelDataType } from './types';

export interface CourseClass extends Model {
  title: ModelDataType.String;
  thumbnailSrc: ModelDataType.File;
  rating: ModelDataType.Number;
  ratingCount: ModelDataType.Number;
  participantNumb: ModelDataType.Number;
  trainer: ModelDataType.Ref<{
    name: ModelDataType.String;
  }>;
  price: ModelDataType.Money;
  /** should not up to 4 chars */
  label: ModelDataType.String;
  discountPrice: ModelDataType.Money;
  headerMediaSrc: ModelDataType.File;
  aboutContent: ModelDataType.String;
  /** unique, used as alternative of id */
  slug: ModelDataType.String;
}

export const CourseClassCollection = db.collection(firebaseNamespaces.CourseClasses) as firestore.CollectionReference<CourseClass>;
