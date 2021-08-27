import type { firestore } from 'firebase-admin';
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace ModelDataType {
  export type String = string;
  export type Number = number;
  export type Bool = boolean;
  export type Empty = null;
  export type Timestamp = firestore.Timestamp;
  export type File = {
    _type: 'FileStorage';
    value: string;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  export type Ref<T extends ModelDataType.Dict = {}> = T & {
    _type: 'Ref';
    _ref: firestore.DocumentReference;
    _lastUpdated: ModelDataType.Timestamp;
  }
  export type List<T = ModelDataType.PossibleValue> = T[];
  export type Dict<T = ModelDataType.PossibleValue> = Record<string, T>;
  export type Primitive = ModelDataType.String
    | ModelDataType.Number
    | ModelDataType.Empty
    | ModelDataType.Bool;
  export type PossibleValue = ModelDataType.Primitive
    | ModelDataType.Timestamp
    | ModelDataType.File
    | ModelDataType.Ref;
  export type PossibleType<TL = ModelDataType.PossibleValue, TD = ModelDataType.PossibleValue> = ModelDataType.PossibleValue
    | ModelDataType.List<TL>
    | ModelDataType.Dict<TD>;
  // Shared ModelDataType
  export type Money = {
    currency: ModelDataType.String;
    value: ModelDataType.Number;
  }
}
