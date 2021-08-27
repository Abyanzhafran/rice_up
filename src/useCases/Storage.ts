import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ModelDataType } from 'src/data/types';
import { storage } from 'src/firebase';

export class StorageUseCases {
  public static upload(file: Blob, ...pathSegments: string[]) {
    const paths = pathSegments.join('/');
    const fileRef = ref(storage, paths);

    return uploadBytes(fileRef, file);
  }

  public static getUrlFromFileStorageDataType({ _type, value: path }: ModelDataType.File) {
    if (_type === 'FileStorage') {
      const fileRef = ref(storage, path);

      return getDownloadURL(fileRef);
    }

    throw new Error('invalid data type');
  }
}
