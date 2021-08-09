import { createFirestoreClientRepository } from 'core/FirestoreClient/createRepository';
import type { CourseClass } from 'core/CourseClass/Model';

const collectionName = 'COURSE_CLASSES';

export const CourseClassFirestoreClientRepository = createFirestoreClientRepository<CourseClass>({
  collectionName,
});
