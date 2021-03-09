import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layout';

import demoRouter from './modules/demo.js';

// TODO 401 404
export const constantRoutes = [
  {
    path: '/',
    redirect: '/demo'
  },
  demoRouter
];

export const asyncRoutes = [
  {
    path: '/demo',
    component: Layout,
    children: [
      {
        path: 'permission',
        component: () => import('@/views/demo/permission.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});
