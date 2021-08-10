import type { useAuthState } from 'boot/auth';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $auth: ReturnType<typeof useAuthState>;
  }
}
