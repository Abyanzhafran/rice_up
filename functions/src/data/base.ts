import type { ModelDataType } from './types';

export interface TimestampModel {
  _created: ModelDataType.Timestamp;
  _updated: ModelDataType.Timestamp;
  _deleted: ModelDataType.Timestamp | ModelDataType.Empty;
}

export interface Model extends TimestampModel {
  [propName: string]: ModelDataType.PossibleType<unknown, unknown>;
}
