import { CourseClassCollection, CourseClassObject } from 'src/data/CourseClass';
import { attrFactories, FirestoreUseCases } from 'src/useCases/Firestore';
import {
  doc, setDoc, where, query, Timestamp, getDoc,
} from 'firebase/firestore';
import { StorageUseCases } from 'src/useCases/Storage';
import firebaseNamespaces from 'app/shared/firebaseNamespaces';
import { UserUseCases } from 'src/useCases/User';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { CourseClass } from 'src/data/CourseClass';
import type { User } from 'src/data/User';

export type StorableCourseClass = Pick<CourseClass,
  'title'
  | 'price'
  | 'label'
  | 'discountPrice'
  | 'slug'
  | 'aboutContent'> & {
  thumbnailSrc: File;
  headerMediaSrc: File;
};

export class CourseClassUseCases {
  public static async getAll() {
    const { docs } = await FirestoreUseCases.execQuery(CourseClassCollection);
    return docs;
  }

  public static async getAuthorizedListOnly() {
    const userDoc = UserUseCases.getCurrentAuthenticatedUserDocRef();

    if (userDoc) {
      const q = query(
        CourseClassCollection,
        where('trainer._ref', '==', userDoc),
      );
      const { docs } = await FirestoreUseCases.execQuery(q);
      return docs;
    }

    throw new Error('Unauthenticated');
  }

  public static async SnapshotToObject(snapshot: QueryDocumentSnapshot<CourseClass>) {
    const { thumbnailSrc, headerMediaSrc, ...data } = snapshot.data();

    return {
      ...data,
      _uid: snapshot.id,
      thumbnailSrc: await StorageUseCases.getUrlFromFileStorageDataType(thumbnailSrc),
      headerMediaSrc: await StorageUseCases.getUrlFromFileStorageDataType(headerMediaSrc),
    } as CourseClassObject;
  }

  public static async create({ thumbnailSrc, headerMediaSrc, ...data }: StorableCourseClass) {
    const userDoc = UserUseCases.getCurrentAuthenticatedUserDocRef();

    if (userDoc) {
      const docRef = doc(CourseClassCollection);
      const userSnapshot = await getDoc(userDoc) as QueryDocumentSnapshot<User>;
      const thumbnailUploadedRef = await CourseClassUseCases.uploadThumbnail(docRef.id, thumbnailSrc);
      const headerMediaUploadedRef = await CourseClassUseCases.uploadHeaderMedia(docRef.id, headerMediaSrc);

      return setDoc(docRef, {
        ...data,
        trainer: {
          _type: 'Ref',
          _ref: userDoc,
          _lastUpdated: Timestamp.now(),
          name: userSnapshot.data().name,
        },
        rating: 0,
        ratingCount: 0,
        participantNumb: 0,
        thumbnailSrc: {
          _type: 'FileStorage',
          value: thumbnailUploadedRef.ref.fullPath,
        },
        headerMediaSrc: {
          _type: 'FileStorage',
          value: headerMediaUploadedRef.ref.fullPath,
        },
        ...attrFactories.create(),
      });
    }

    throw new Error('Unauthenticated');
  }

  private static uploadThumbnail(courseId: string, file: Blob) {
    return CourseClassUseCases.uploadMedia(file, `${courseId}_thumbnail`);
  }

  private static uploadHeaderMedia(courseId: string, file: Blob) {
    return CourseClassUseCases.uploadMedia(file, `${courseId}_headerMedia`);
  }

  private static async uploadMedia(file: Blob, ...pathSegments: string[]) {
    return StorageUseCases.upload(file, firebaseNamespaces.CourseClasses, ...pathSegments);
  }
}
