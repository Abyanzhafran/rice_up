import * as functions from "firebase-functions";
import { UserCollection } from './data/User';
import { attrFactories } from './useCases/firestore';

export const onUserCreated = functions.auth.user().onCreate((user) => {
  const docRef = UserCollection.doc(user.uid)

  // because we only has Google login method so, it will always has email and name
  return docRef.create({
    name: user.displayName!,
    email: user.email!,
    ...attrFactories.create(),
  })
})
