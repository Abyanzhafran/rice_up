import { doc } from 'firebase/firestore';
import { auth } from 'src/firebase';
import { UserCollection } from 'src/data/User';

export class UserUseCases {
  public static getCurrentAuthenticatedUserDocRef() {
    if (auth.currentUser) {
      return doc(UserCollection, auth.currentUser.uid);
    }

    return null;
  }
}
