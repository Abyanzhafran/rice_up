/* eslint-disable @typescript-eslint/no-explicit-any */
export const isEmpty = (v: any) => v === null || v === undefined;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isObject = (v: any): v is Object => !isEmpty(v)
  && (typeof v === 'object' || typeof v === 'function');
