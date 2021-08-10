import type { GuardType } from 'src/types';

declare module 'vue-router' {
  interface RouteMeta {
    guard?: GuardType;
  }
}
