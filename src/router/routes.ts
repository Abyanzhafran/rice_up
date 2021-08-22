import { RouteRecordRaw } from 'vue-router';

const slugRegex = '[a-z0-9-]+';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('pages/Welcome.vue'),
        meta: { guard: 'no-auth' },
      },
      {
        path: '/splash',
        name: 'SplashScreen',
        component: () => import('pages/SplashScreen.vue'),
      },
    ],
  },
  {
    path: '/app',
    component: () => import('layouts/DashboardLayoutMobile.vue'),
    meta: { guard: 'auth' },
    children: [
      {
        path: '',
        name: 'AppHome',
        component: () => import('pages/dashboard/Home.vue'),
      },
      {
        path: 'explore',
        name: 'AppExplore',
        component: () => import('pages/dashboard/Explore.vue'),
      },
      {
        path: 'notification',
        name: 'AppNotification',
        component: () => import('pages/dashboard/Notification.vue'),
      },
      {
        path: 'stuff',
        name: 'AppStuff',
        component: () => import('pages/dashboard/Talent.vue'),
      },
      {
        path: 'stuff/:stuffId',
        name: 'AppStuffDetail',
        component: () => import('pages/dashboard/MachineSpec.vue'),
      },
      {
        path: 'account',
        name: 'AppAccount',
        component: () => import('pages/dashboard/Account.vue'),
      },
      {
        path: 'setting',
        name: 'AppSettings',
        component: () => import('pages/dashboard/Setting.vue'),
      },
    ],
  },
  {
    path: '/app',
    component: () => import('src/layouts/DashboardLayoutCourse.vue'),
    meta: { guard: 'auth' },
    children: [
      {
        path: `:courseSlug(${slugRegex})`,
        name: 'CourseDetail',
        component: () => import('pages/dashboardCourse/CourseDetail.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('src/layouts/DashboardLayoutAdmin.vue'),
    meta: { guard: 'auth' },
    children: [
      {
        path: '',
        component: () => import('pages/dashboardAdmin/ManageModules.vue'),
      },
      {
        path: 'module/edit',
        component: () => import('pages/dashboardAdmin/ModuleEditor.vue'),
      },
      {
        path: 'module/show',
        component: () => import('pages/dashboardAdmin/ModuleShow.vue'),
      },
      {
        path: 'module/list',
        component: () => import('pages/dashboardAdmin/ManageModuleList.vue'),
      },
      {
        path: 'formregister',
        component: () => import('pages/dashboard/FormTeamRegister.vue'),
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
