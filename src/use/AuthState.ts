import { createGlobalState } from '@vueuse/core';
import { auth } from 'src/firebase';
import type { RouteLocationRaw } from 'vue-router';

export type authStateHandler = () => void;

export const useAuthState = createGlobalState(() => ({
  user: auth.currentUser,
  isAwaiting: true,
  nextAuthRedirect: null as RouteLocationRaw | null,
  nextUnauthRedirect: null as RouteLocationRaw | null,
  afterAuthHandlerOnce: [] as authStateHandler[],
  afterUnauthHandlerOnce: [] as authStateHandler[],
}));
