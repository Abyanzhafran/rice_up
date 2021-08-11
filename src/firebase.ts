/* eslint-disable no-console */
import { getApp, getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { CourseClassFirestoreClientRepository } from 'core/CourseClass/FirestoreRepository';
import { CourseClassUseCases } from 'core/CourseClass/UseCases';
import firebaseJson from 'app/firebase.json';

const DEFAULT_EMULATOR_HOST = 'localhost';

const app = getApps().length
  ? getApp()
  : initializeApp(JSON.parse(atob(String(process.env.FIREBASE_CONFIG))));
const db = getFirestore(app);
const auth = getAuth(app);

const connectToEmulator = (() => {
  const connect = () => {
    try {
      connectFirestoreEmulator(db, DEFAULT_EMULATOR_HOST, firebaseJson.emulators.firestore.port);
      connectAuthEmulator(auth, `http://${DEFAULT_EMULATOR_HOST}:${firebaseJson.emulators.auth.port}`);
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
})();

if (process.env.FIREBASE_USE_EMULATOR) {
  connectToEmulator();
}

const CourseClassRepository = new CourseClassFirestoreClientRepository(db);
const CourseClassUseCase = new CourseClassUseCases(CourseClassRepository);

const authProvider = new GoogleAuthProvider();

export {
  app as fbApp,
  db,
  auth,
  CourseClassUseCase,
  authProvider,
};
