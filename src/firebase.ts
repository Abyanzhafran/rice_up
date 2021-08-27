/* eslint-disable no-console */
import { getApp, getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import firebaseJson from 'app/firebase.json';

const DEFAULT_EMULATOR_HOST = 'localhost';

const app = getApps().length
  ? getApp()
  : initializeApp(JSON.parse(atob(String(process.env.FIREBASE_CONFIG))));
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const connectToEmulator = (() => {
  const connect = () => {
    console.log('connecting to emulator...');

    try {
      connectAuthEmulator(auth, `http://${DEFAULT_EMULATOR_HOST}:${firebaseJson.emulators.auth.port}`);
      connectFirestoreEmulator(db, DEFAULT_EMULATOR_HOST, firebaseJson.emulators.firestore.port);
      connectStorageEmulator(storage, DEFAULT_EMULATOR_HOST, firebaseJson.emulators.storage.port);
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

// due to quasar default, everything calling env will be converted string then if inside if() will be converted to boolean
if (JSON.parse(process.env.FIREBASE_USE_EMULATOR as unknown as string)) {
  connectToEmulator();
}

const authProvider = new GoogleAuthProvider();

export {
  app as fbApp,
  auth,
  authProvider,
  db,
  storage,
};
