import type { CourseClass } from 'core/CourseClass/Model';
import { IFirestoreClientRepository } from 'core/FirestoreClient/Repository';

export type CourseClassRepository = IFirestoreClientRepository<CourseClass>;
