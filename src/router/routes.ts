import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/dashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'welcome',
        component: () => import('pages/Welcome.vue'),
      },
    ],
  },
  {
    path: '/dashboardMobile',
    component: () => import('layouts/dashboardLayoutMobile.vue'),
    children: [
      {
        path: 'account',
        name: 'Account',
        component: () => import('pages/dashboard/Account.vue'),
      },
      {
        path: 'talent',
        name: 'Talent',
        component: () => import('pages/dashboard/Talent.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
