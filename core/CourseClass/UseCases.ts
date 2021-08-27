import { ref, uploadBytes } from 'firebase/storage';
import { FirestoreClientUseCase } from 'core/FirestoreClient/UseCases';
import type { FirebaseStorage } from 'firebase/storage';
import type { CourseClass } from 'core/CourseClass/Model';
import type { IFirestoreClientRepository } from 'core/FirestoreClient/Repository';

export class CourseClassUseCases extends FirestoreClientUseCase<CourseClass> {
  constructor(
    protected repository: IFirestoreClientRepository<CourseClass>,
    protected storage: FirebaseStorage,
  ) {
    super(repository);
  }

  public getManageableList(userId: string) {
    return this.repository.where([
      ['trainer.value', '==', userId],
    ]);
  }

  public uploadThumbnail(courseId: string, file: Blob) {
    return this._uploadFile(courseId, 'thumbnail', file);
  }

  public uploadHeaderMedia(courseId: string, file: Blob) {
    return this._uploadFile(courseId, 'header-media', file);
  }

  private async _uploadFile(courseId: string, filename: string, file: Blob) {
    const fileStorageRef = this._createStorageRef(`${courseId}_${filename}`);
    const uploadRes = await uploadBytes(fileStorageRef, file);

    return uploadRes.ref.fullPath;
  }

  private _createStorageRef(...pathSegments: string[]) {
    const path = ['COURSE-CLASSES', ...pathSegments].join('/');
    return ref(this.storage, path);
  }
}
