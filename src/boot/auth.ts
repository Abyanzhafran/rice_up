import { watch } from 'vue';
import { Loading } from 'quasar';
import { boot } from 'quasar/wrappers';
import { createGlobalState } from '@vueuse/core';
import { auth } from 'src/firebase';
import type { RouteLocationRaw } from 'vue-router';

type authStateHandler = () => void;

export const useAuthState = createGlobalState(() => ({
  user: auth.currentUser,
  isAwaiting: true,
  afterAuthHandlerOnce: [] as authStateHandler[],
  afterUnauthHandlerOnce: [] as authStateHandler[],
}));

export const authStateUtils = () => {
  const authState = useAuthState();

  return {
    subscribeAfterAuthOnce: (handler: authStateHandler) => {
      authState.afterAuthHandlerOnce.push(handler);
    },
    subscribeAfterUnauthOnce: (handler: authStateHandler) => {
      authState.afterUnauthHandlerOnce.push(handler);
    },
  };
};

export default boot(({
  app, router, urlPath, /* redirect, */
}) => {
  const authState = useAuthState();
  app.config.globalProperties.$auth = authState;
  const getCurrentRoute = (isFirstLoad = false) => (isFirstLoad
    ? router.resolve(urlPath)
    : router.currentRoute.value);
  const getRouteGuardType = (isFirstLoad = false) => getCurrentRoute(isFirstLoad).meta.guard || 'default';

  const onAfterAuthenticated = () => {
    authState.afterAuthHandlerOnce.forEach((handler) => handler());
    authState.afterAuthHandlerOnce = [];
  };

  const onAfterUnauthenticated = () => {
    authState.afterUnauthHandlerOnce.forEach((handler) => handler());
    authState.afterUnauthHandlerOnce = [];
  };

  const getRedirectUrl = (isAuthenticated = false, isFirstLoad = false): RouteLocationRaw => {
    const currentRouteGuard = getRouteGuardType(isFirstLoad);
    if (currentRouteGuard === 'auth' && !isAuthenticated) {
      return '/welcome';
    }
    if (currentRouteGuard === 'no-auth' && isAuthenticated) {
      return '/splash';
    }

    return urlPath;
  };

  auth
    .onAuthStateChanged((user) => {
      authState.isAwaiting = false;
      authState.user = user;

      if (user) {
        onAfterAuthenticated();
      } else {
        onAfterUnauthenticated();
      }
    });

  watch(() => [authState.user, authState.isAwaiting] as const, ([user], old) => {
    const isFirstLoad = old === undefined;

    return !isFirstLoad
      && router.push(getRedirectUrl(!!user, isFirstLoad));
  }, { immediate: true });

  // show loading ui when route has auth guard type && waiting the auth status
  watch(() => authState.isAwaiting, (v, old) => {
    const isFirstLoad = old === undefined;
    const routeGuardType = getRouteGuardType(isFirstLoad);

    if (routeGuardType === 'auth' && v) {
      Loading.show({ message: 'Sedang mengautentikasi...' });
    } else {
      Loading.hide();
    }
  }, { immediate: true });
});
