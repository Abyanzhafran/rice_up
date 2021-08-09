import { CourseClassFirestoreRepository } from 'core/CourseClass/Repository';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import firebaseJson from 'app/firebase.json';

const app = getApps().length
  ? getApp()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  : initializeApp(JSON.parse(atob(process.env.FIREBASE_CONFIG!)));

const db = getFirestore(app);

connectFirestoreEmulator(db, 'localhost', firebaseJson.emulators.firestore.port);

const CourseRepository = new CourseClassFirestoreRepository(db);

export {
  app as fbApp,
  db,
  CourseRepository,
};
