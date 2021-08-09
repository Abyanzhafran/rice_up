/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { isEmpty } from 'core/helpers';

export namespace DataType {
  export type String = string;
  export type Number = number;
  export type Bool = boolean;
  export type Empty = null;
  export type Timestamp = Date;
  export type FileUrl = {
    type: 'FileUrl';
    value: string;
  }
  export type FileBlob = {
    type: 'FileBlob';
    value: Blob;
  }
  export type File = FileUrl | FileBlob;
  export type List<T = PossibleValue> = T[];
  export type Dict<T = PossibleValue> = Record<string, T>;
  export type Primitive = DataType.String
    | DataType.Number
    | Empty
    | Bool;
  export type PossibleValue = Primitive
    | Timestamp
    | File;
  export type PossibleType = PossibleValue
    | List
    | Dict;
}

export interface Model {
  [k: string]: DataType.PossibleType;
  _uid: DataType.String;
  _created: DataType.Timestamp;
  _updated: DataType.Timestamp;
  _deleted: DataType.Timestamp | DataType.Empty;
}

export const isFileDataType = (v: any): v is DataType.File => (
  !isEmpty(v)
  && String(v.type).includes('File')
  && 'value' in v
);

export const isFileUrlDataType = (v: any): v is DataType.FileUrl => (
  isFileDataType(v)
  && v?.type === 'FileUrl');

export const isFileBlobDataType = (v: any): v is DataType.FileBlob => (
  isFileDataType(v)
  && v?.type === 'FileBlob');
