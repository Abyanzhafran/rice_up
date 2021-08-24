import type { useAuthState } from 'src/use/AuthState';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $auth: ReturnType<typeof useAuthState>;
  }
}
