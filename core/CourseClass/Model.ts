import type { DataType, Model } from 'core/Model';

export interface CourseClass extends Model {
  title: DataType.String;
  thumbnailSrc: DataType.File;
  thumbnailsSrc: DataType.List<DataType.File>;
  rating: DataType.Number;
  ratingCount: DataType.Number;
  participantNumb: DataType.Number;
  // TODO: create reference DataType
  trainer: DataType.String;
  price: {
    currency: DataType.String;
    value: DataType.Number;
  };
  aboutContent: DataType.File;
}
