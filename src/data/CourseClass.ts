import { collection } from 'firebase/firestore';
import firebaseNamespaces from 'app/shared/firebaseNamespaces';
import { db } from 'src/firebase';
import type { DocumentReference, CollectionReference } from 'firebase/firestore';
import type { Model, ModelInObject } from 'src/data/base';
import type { ModelDataType } from 'src/data/types';
import type { User } from 'src/data/User';

export interface CourseClass extends Model {
  title: ModelDataType.String;
  thumbnailSrc: ModelDataType.File;
  rating: ModelDataType.Number;
  ratingCount: ModelDataType.Number;
  participantNumb: ModelDataType.Number;
  trainer: ModelDataType.Ref<DocumentReference<User>, {
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

export type CourseClassObject = Omit<ModelInObject<CourseClass>, 'thumbnailSrc' | 'headerMediaSrc'> & {
  thumbnailSrc: string;
  headerMediaSrc: string;
}

export const CourseClassCollection = collection(db, firebaseNamespaces.CourseClasses) as CollectionReference<CourseClass>;
