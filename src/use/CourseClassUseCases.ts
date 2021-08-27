import { CourseClassFirestoreClientRepository } from 'core/CourseClass/FirestoreRepository';
import { CourseClassUseCases } from 'core/CourseClass/UseCases';
import { db, storage } from 'src/firebase';

export const useCourseClassUseCases = () => {
  const repository = new CourseClassFirestoreClientRepository(db);
  const useCase = new CourseClassUseCases(repository, storage);

  return {
    useCase,
  };
};
