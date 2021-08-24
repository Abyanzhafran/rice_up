import type { IFirestoreClientRepository } from 'core/FirestoreClient/Repository';
import type { MyCourseClass } from 'core/MyCourseClass/Model';

export type MyCourseClassRepository = IFirestoreClientRepository<MyCourseClass>;
