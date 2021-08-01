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
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/dashboardMobile',
    component: () => import('layouts/dashboardLayoutMobile.vue'),
    children: [{ path: '', component: () => import('pages/dashboard/Account.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
