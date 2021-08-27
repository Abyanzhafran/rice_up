import { firestore } from 'firebase-admin'

export const attrFactories = {
  create() {
    const now = firestore.Timestamp.now()
    return {
      _created: now,
      _updated: now,
      _deleted: null,
    }
  },
  update() {
    const now = firestore.Timestamp.now()
    return {
      _updated: now,
    }
  },
  delete() {
    const now = firestore.Timestamp.now()
    return {
      _deleted: now,
    }
  },
  restore() {
    return {
      _deleted: null,
    }
  },
}
