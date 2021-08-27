/* eslint-disable @typescript-eslint/no-namespace */
import type { CourseClass } from 'src/data/CourseClass';

export type GuardType = 'default' | 'auth' | 'no-auth';

export namespace FormCourseClassEdit {
  export namespace Props {
    export type data = Pick<CourseClass,
      'title'
      | 'thumbnailSrc'
      | 'price'
      | 'label'
      | 'discountPrice'
      | 'headerMediaSrc'
      | 'aboutContent'
      | 'slug'>;
  }

  export interface Props {
    data: Props.data;
  }

  export type SubmitPayload = Pick<CourseClass,
    'title'
    | 'price'
    | 'label'
    | 'discountPrice'
    | 'aboutContent'
    | 'slug'> & {
      thumbnailSrc: File;
      headerMediaSrc: File;
    };
}
