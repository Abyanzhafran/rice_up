import * as admin from 'firebase-admin';

const app = admin.apps.length
  ? admin.app()
  : admin.initializeApp();

const db = app.firestore();

export {
  app as adminApp,
  db,
}
