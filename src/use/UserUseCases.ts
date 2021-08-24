import { UserFirestoreClientRepository } from 'core/User/FirestoreRepository';
import { UserUseCases } from 'core/User/UseCases';
import { db } from 'src/firebase';

export const useUserUseCases = () => {
  const repository = new UserFirestoreClientRepository(db);
  const useCase = new UserUseCases(repository);

  return useCase;
};
