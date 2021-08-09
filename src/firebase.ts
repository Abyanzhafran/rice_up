/* eslint-disable no-console */
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { CourseClassFirestoreClientRepository } from 'core/CourseClass/FirestoreRepository';
import firebaseJson from 'app/firebase.json';
import { CourseClassUseCases } from 'core/CourseClass/UseCases';

const DEFAULT_EMULATOR_HOST = 'localhost';

const app = getApps().length
  ? getApp()
  : initializeApp(JSON.parse(atob(String(process.env.FIREBASE_CONFIG))));
const db = getFirestore(app);

const connectToEmulator = () => {
  const connect = () => {
    try {
      connectFirestoreEmulator(db, DEFAULT_EMULATOR_HOST, firebaseJson.emulators.firestore.port);
    } catch (err) {
      console.error(err);
    }
  };
  let isCalled = false;

  return () => {
    if (!isCalled) {
      isCalled = true;
      connect();
    }
  };
};

if (process.env.FIREBASE_USE_EMULATOR) {
  connectToEmulator();
}

const CourseClassRepository = new CourseClassFirestoreClientRepository(db);
const CourseClassUseCase = new CourseClassUseCases(CourseClassRepository);

export {
  app as fbApp,
  db,
  CourseClassUseCase,
};
