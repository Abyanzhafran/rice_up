import { computed } from 'vue';
import { doc } from 'firebase/firestore';
import { MyCourseClassFirestoreClientRepository, collectionName } from 'core/MyCourseClass/FirestoreRepository';
import { MyCourseClassUseCases } from 'core/MyCourseClass/UseCases';
import { db } from 'src/firebase';
import { useAuthState } from 'src/use/AuthState';
import type { DocumentReference } from 'firebase/firestore';
import type { User } from 'core/User/Model';

type onUseCaseAvailableHandler = (useCase: MyCourseClassUseCases) => unknown;

class MyCourseClassError extends Error {
  constructor(code: string, msg: string) {
    super(msg);
    this.name = `MyCourseClass/${code}`;
  }
}

export const useMyCourseClassUseCases = () => {
  const authState = useAuthState();
  const userDoc = computed(() => authState.user
    && doc(db, collectionName, authState.user.uid) as DocumentReference<User>);
  const repository = computed(() => userDoc.value
    && new MyCourseClassFirestoreClientRepository(userDoc.value));
  const useCase = computed(() => repository.value
    && new MyCourseClassUseCases(repository.value));
  const onAvailable = (handler: onUseCaseAvailableHandler) => {
    if (useCase.value) {
      return handler(useCase.value);
    }

    throw new MyCourseClassError('no-usecase-context', 'Maaf, Anda tidak memiliki akses!');
  };

  return {
    useCase,
    onAvailable,
  };
};
