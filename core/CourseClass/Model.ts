import type { DataType, Model } from 'core/Model';

export interface CourseClass extends Model {
  title: DataType.String;
  thumbnailSrc: DataType.File;
  rating: DataType.Number;
  ratingCount: DataType.Number;
  participantNumb: DataType.Number;
  trainer: DataType.Ref<{
    name: DataType.String;
  }>;
  price: DataType.Money;
  /** should not up to 4 chars */
  label: DataType.String;
  discountPrice: DataType.Money;
  headerMediaSrc: {
    _type: 'YoutubeEmbed';
    value: DataType.String;
  } | DataType.File;
  aboutContent: DataType.String;
  /** unique, used as alternative of id */
  slug: DataType.String;
}
