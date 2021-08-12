import type { DataType, Model } from 'core/Model';

export interface CourseClassModule extends Model {
  title: DataType.String;
  content: DataType.String;
}
