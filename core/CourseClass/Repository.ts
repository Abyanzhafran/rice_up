import type { IFirestoreClientRepository } from 'core/FirestoreClient/Repository';
import type { CourseClass } from 'core/CourseClass/Model';

export type CourseClassRepository = IFirestoreClientRepository<CourseClass>;
