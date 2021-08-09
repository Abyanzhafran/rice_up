import { FirestoreClientUseCase } from 'core/FirestoreClient/UseCases';
import type { CourseClass } from 'core/CourseClass/Model';

export class CourseClassUseCases extends FirestoreClientUseCase<CourseClass> implements CourseClassUseCases {
}
