import type { IFirestoreClientRepository } from 'core/FirestoreClient/Repository';
import type { CourseClassModule } from 'core/CourseClassModule/Model';

export type CourseClassModuleRepository = IFirestoreClientRepository<CourseClassModule>;
