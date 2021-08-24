import type { DataType, Model } from 'core/Model';

export interface MyCourseClass extends Model {
  course: DataType.Ref<{
    name: DataType.String;
    slug: DataType.String;
    trainerName: DataType.String;
  }>;
  progress: DataType.List<{
    /** 1 to 100 */
    completion: DataType.Number;
    module: DataType.Ref<{
      name: DataType.String;
    }>;
  }>;
  /**  computed value, counted from progress.completion */
  completed: DataType.Bool;
}
