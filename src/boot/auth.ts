import { watch } from 'vue';
import { Loading } from 'quasar';
import { boot } from 'quasar/wrappers';
import { auth } from 'src/firebase';
import { useAuthState } from 'src/use/AuthState';
import type { RouteLocationRaw, RouteLocationNormalizedLoaded } from 'vue-router';
import type { authStateHandler } from 'src/use/AuthState';

export const authStateUtils = () => {
  const authState = useAuthState();

  return {
    subscribeOnceAfterAuth: (handler: authStateHandler) => {
      authState.afterAuthHandlerOnce.push(handler);
    },
    subscribeOnceAfterUnauth: (handler: authStateHandler) => {
      authState.afterUnauthHandlerOnce.push(handler);
    },
  };
};

const getRouteGuardType = (route: RouteLocationNormalizedLoaded) => route.meta.guard || 'default';
const authFailRedirect: RouteLocationRaw = { name: 'Welcome' };
const noAuthFailRedirect: RouteLocationRaw = { name: 'AppHome' };

export default boot(({
  app, router, urlPath, /* redirect, */
}) => {
  const authState = useAuthState();
  app.config.globalProperties.$auth = authState;
  const getCurrentRoute = (isFirstLoad = false) => (isFirstLoad
    ? router.resolve(urlPath)
    : router.currentRoute.value);

  const onAfterAuthenticated = () => {
    authState.afterAuthHandlerOnce.forEach((handler) => handler());
    authState.afterAuthHandlerOnce = [];
    authState.nextAuthRedirect = null;
  };

  const onAfterUnauthenticated = () => {
    authState.afterUnauthHandlerOnce.forEach((handler) => handler());
    authState.afterUnauthHandlerOnce = [];
    authState.nextUnauthRedirect = null;
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

  // watch auth status, then redirect
  watch(() => [authState.user, authState.isAwaiting] as const, ([user], old) => {
    const isFirstLoad = old === undefined;

    if (!isFirstLoad) {
      const currentRouteGuard = getRouteGuardType(getCurrentRoute(isFirstLoad));

      if (currentRouteGuard === 'auth' && !user) {
        void router.push(authState.nextAuthRedirect || authFailRedirect);
      }
      if (currentRouteGuard === 'no-auth' && user) {
        void router.push(noAuthFailRedirect);
      }
    }
  }, { immediate: true });

  // show loading ui when route has auth guard type && waiting the auth status
  watch(() => authState.isAwaiting, (v, old) => {
    const isFirstLoad = old === undefined;
    const routeGuardType = getRouteGuardType(getCurrentRoute(isFirstLoad));

    if (routeGuardType === 'auth' && v) {
      Loading.show({ message: 'Sedang mengautentikasi...' });
    } else {
      Loading.hide();
    }
  }, { immediate: true });

  router.beforeResolve((to, from, next) => {
    if (authState.isAwaiting) {
      next();
    } else {
      const currentRouteGuard = getRouteGuardType(to);

      if (currentRouteGuard === 'auth' && !authState.user) {
        next(authState.nextAuthRedirect || authFailRedirect);
      } else if (currentRouteGuard === 'no-auth' && authState.user) {
        next(noAuthFailRedirect);
      } else {
        next();
      }
    }
  });
});
