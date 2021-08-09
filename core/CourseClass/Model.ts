import type { DataType, Model } from 'core/Model';

export interface CourseClass extends Model {
  title: DataType.String;
  thumbnailSrc: DataType.File;
  thumbnailsSrc: DataType.List<DataType.File>;
  rating: DataType.Number;
  ratingCount: DataType.Number;
  participantNumb: DataType.Number;
  // TODO: create reference DataType
  trainer: DataType.Ref;
  price: DataType.Money;
  aboutContent: DataType.File;
}
