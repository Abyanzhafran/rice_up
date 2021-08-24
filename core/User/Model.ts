import type { DataType, Model } from 'core/Model';

export interface User extends Model {
  name: DataType.String;
  email: DataType.String;
}
