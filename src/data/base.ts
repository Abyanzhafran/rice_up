import type { ModelDataType } from 'src/data/types';

export interface TimestampModel {
  _created: ModelDataType.Timestamp;
  _updated: ModelDataType.Timestamp;
  _deleted: ModelDataType.Timestamp | ModelDataType.Empty;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Model extends TimestampModel {
}

export type ModelInObject<M extends Model> = M & {
  _uid: ModelDataType.String;
}
