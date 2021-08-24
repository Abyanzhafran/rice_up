import { createFirestoreClientSubcollectionRepository } from 'core/FirestoreClient/createRepository';
import type { CourseClass } from 'core/CourseClass/Model';
import type { CourseClassModule } from 'core/CourseClassModule/Model';
import type { CourseClassModuleRepository } from 'core/CourseClassModule/Repository';

export const collectionName = 'MODULES';

export class CourseClassModuleFirestoreClientRepository extends createFirestoreClientSubcollectionRepository<CourseClassModule, CourseClass>({
  collectionName,
}) implements CourseClassModuleRepository {
}
