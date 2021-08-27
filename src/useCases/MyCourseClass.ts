import { MyCourseClassCollection } from 'src/data/MyCourseClass';
import { FirestoreUseCases } from 'src/useCases/Firestore';
import { UserUseCases } from 'src/useCases/User';

export class MyCourseClassUseCases {
  public static async getAll() {
    const userDocRef = UserUseCases.getCurrentAuthenticatedUserDocRef();

    if (userDocRef) {
      const { docs } = await FirestoreUseCases.execQuery(MyCourseClassCollection(userDocRef));
      return docs;
    }

    return [];
  }
}
