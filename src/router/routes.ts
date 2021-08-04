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
    ],
  },
  {
    path: '/welcome',
    component: () => import('pages/Welcome.vue'),
  },
  {
    path: '/dashboardMobile',
    component: () => import('layouts/dashboardLayoutMobile.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Home.vue'),
      },
      {
        path: 'account',
        component: () => import('pages/dashboard/Account.vue'),
      },
      {
        path: 'talent',
        component: () => import('pages/dashboard/Talent.vue'),
      },
      {
        path: 'explore',
        component: () => import('pages/dashboard/Explore.vue'),
      },
      {
        path: 'course',
        component: () => import('pages/Course.vue'),
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
