import { CourseClassFirestoreClientRepository } from 'core/CourseClass/FirestoreRepository';
import { db } from 'src/firebase';

export const CourseClassRepository = new CourseClassFirestoreClientRepository(db);
