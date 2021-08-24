/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-use-before-define */
import { Timestamp as FirestoreTimestamp } from 'firebase/firestore';
import { isFileBlobDataType, isFileDataType, isRefDataType } from 'core/Model';
import { isEmpty, isObject } from 'core/helpers';
import type { DataType, Model } from 'core/Model';

export namespace FirestoreDataType {
  export interface FileStorage {
    _type: 'StorageFile';
    value: string;
  }
  export type File = FileStorage | DataType.FileUrl;
  export type Timestamp = FirestoreTimestamp;
  export type Ref = DataType.Ref;
  export type List<T = PossibleValue> = T[];
  export type Dict<T = PossibleValue> = Record<string, T>;
  export type Primitive = DataType.String
    | DataType.Number
    | DataType.Empty
    | DataType.Bool;
  export type PossibleValue = Primitive
    | FirestoreDataType.Timestamp
    | FirestoreDataType.File
    | FirestoreDataType.Ref;
  export type PossibleType = PossibleValue
    | FirestoreDataType.Dict
    | FirestoreDataType.List;
}

export interface FirestoreModel {
  [k: string] : FirestoreDataType.PossibleType;
  _created: FirestoreDataType.Timestamp;
  _updated: FirestoreDataType.Timestamp;
  _deleted: FirestoreDataType.Timestamp | DataType.Empty;
}

export type ModelToFirestoreModel<M extends Model> = {
  // first, remove the _uid property. because in firestore the `id` will be accessed via `snapshot.id`
  [K in keyof M as Exclude<K, '_uid'>]: (M[K] extends DataType.Timestamp
    // convert Timestamp to FirestoreTimestamp
    ? FirestoreDataType.Timestamp
    // convert File to FirestoreDataType.StorageFile
    : (M[K] extends DataType.File
      ? FirestoreDataType.File
      : M[K]));
}

export type FirestoreModelToModel<M extends FirestoreModel> = { _uid: DataType.String } & {
  [K in keyof M]: (M[K] extends FirestoreDataType.Timestamp
    // convert FirestoreTimestamp to Timestamp
    ? DataType.Timestamp
    // convert FirestoreDataType.StorageFile to File
    : (M[K] extends FirestoreDataType.File
      ? DataType.File
      : M[K]));
}

class UnsupportedFileBlobDataType extends Error {
  name = 'UnsupportedFirestoreDataType';

  constructor() {
    super('File/Blob is not assignable to firestore data type, please convert it to supported data type');
  }
}

const shouldSkipConvertDataType = <V extends DataType.PossibleType | FirestoreDataType.PossibleType>(v: V) => (
  typeof v === 'string'
  && typeof v === 'number'
  && typeof v === 'boolean'
  && isFileDataType(v)
  && isRefDataType(v)
);

export const modelDataTypeToFirestoreDataType = <V extends DataType.PossibleType>(v: V): FirestoreDataType.PossibleType => {
  if (isEmpty(v)) {
    return null;
  }

  if (shouldSkipConvertDataType(v)) {
    return v as FirestoreDataType.PossibleType;
  }

  if (isFileBlobDataType(v)) {
    throw new UnsupportedFileBlobDataType();
  }

  if (v instanceof Date) {
    return FirestoreTimestamp.fromDate(v);
  }

  if (Array.isArray(v)) {
    return v.map(modelDataTypeToFirestoreDataType) as FirestoreDataType.List;
  }

  if (isObject(v)) {
    return Object.entries(v)
      .reduce(
        (acc, [k, val]) => ({ ...acc, [k]: modelDataTypeToFirestoreDataType(val) }) as FirestoreDataType.Dict,
        {},
      );
  }

  return v as FirestoreDataType.PossibleType;
};

export const firestoreDataTypeToModelDataType = <V extends FirestoreDataType.PossibleType>(v: V): DataType.PossibleType => {
  if (isEmpty(v)) {
    return null;
  }

  if (shouldSkipConvertDataType(v)) {
    return v as DataType.PossibleType;
  }

  if (isFileBlobDataType(v)) {
    throw new UnsupportedFileBlobDataType();
  }

  if (v instanceof FirestoreTimestamp) {
    return (v).toDate();
  }

  if (Array.isArray(v)) {
    return v.map(firestoreDataTypeToModelDataType) as DataType.List;
  }

  if (isObject(v)) {
    return Object.entries(v)
      .reduce(
        (acc, [k, val]) => ({ ...acc, [k]: firestoreDataTypeToModelDataType(val) }) as DataType.Dict,
        {},
      );
  }

  return v as DataType.PossibleType;
};
