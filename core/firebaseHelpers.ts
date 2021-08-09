/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { isEmpty } from 'core/helpers';

export interface FirebaseError {
  name: 'FirebaseError';
  message: string;
  code: `${string}/${string}`;
}

export const isFirebaseError = (err: any): err is FirebaseError => !isEmpty(err)
  && err.name === 'FirebaseError';
