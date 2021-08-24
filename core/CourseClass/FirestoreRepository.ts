import { createFirestoreClientRepository } from 'core/FirestoreClient/createRepository';
import type { CourseClass } from 'core/CourseClass/Model';
import type { CourseClassRepository } from 'core/CourseClass/Repository';

export const collectionName = 'COURSE_CLASSES';

export class CourseClassFirestoreClientRepository extends createFirestoreClientRepository<CourseClass>({
  collectionName,
}) implements CourseClassRepository {
}
