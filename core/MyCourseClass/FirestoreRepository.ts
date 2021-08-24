import { createFirestoreClientSubcollectionRepository } from 'core/FirestoreClient/createRepository';
import type { MyCourseClass } from 'core/MyCourseClass/Model';
import type { User } from 'core/User/Model';
import type { MyCourseClassRepository } from 'core/MyCourseClass/Repository';

export const collectionName = 'MY_COURSES';

export class MyCourseClassFirestoreClientRepository extends createFirestoreClientSubcollectionRepository<MyCourseClass, User>({
  collectionName,
}) implements MyCourseClassRepository {
}
