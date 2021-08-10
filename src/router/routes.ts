import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/welcome',
        // component: () => import('pages/Index.vue')
      },
    ],
  },
  {
    path: '/welcome',
    component: () => import('pages/Welcome.vue'),
    meta: { guard: 'no-auth' },
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
        meta: { guard: 'auth' },
      },
    ],
  },
  {
    path: '/dashboardAdmin',
    component: () => import('src/layouts/DashboardLayoutAdmin.vue'),
    meta: { guard: 'auth' },
    children: [
      {
        path: '',
        component: () => import('pages/dashboardAdmin/Index.vue'),
      },
      {
        path: 'manage_module',
        component: () => import('pages/dashboardAdmin/ManageModules.vue'),
      },
      {
        path: 'module_show',
        component: () => import('pages/dashboardAdmin/ModuleShow.vue'),
      },
      {
        path: 'orek2',
        component: () => import('pages/dashboardAdmin/Orek2.vue'),
      },
    ],
  },
  {
    path: '/dashboardMobile',
    component: () => import('layouts/DashboardLayoutMobile.vue'),
    meta: { guard: 'auth' },
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
