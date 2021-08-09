import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/welcome',
    component: () => import('pages/Welcome.vue'),
  },
  {
    path: '/splash',
    component: () => import('pages/SplashScreen.vue'),
  },
  {
    path: '/dashboardCourse',
    component: () => import('src/layouts/DashboardLayoutCourse.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboardCourse/CourseDetail.vue'),
      },
    ],
  },
  {
    path: '/dashboardAdmin',
    component: () => import('src/layouts/DashboardLayoutAdmin.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboardAdmin/Index.vue'),
      },
    ],
  },
  {
    path: '/dashboardMobile',
    component: () => import('layouts/DashboardLayoutMobile.vue'),
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
      {
        path: 'notification',
        component: () => import('pages/dashboard/Notification.vue'),
      },
      {
        path: 'setting',
        component: () => import('pages/dashboard/Setting.vue'),
      },
      {
        path: 'machinespec',
        component: () => import('pages/dashboard/MachineSpec.vue'),
      },
      {
        path: 'orek2',
        component: () => import('pages/dashboard/Orek2.vue'),
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
