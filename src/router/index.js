import { createRouter, createWebHashHistory } from 'vue-router';

import demoRouter from './modules/demo.js';

// TODO 401 404
export const constantRoutes = [
  {
    path: '/',
    redirect: '/demo'
  },
  demoRouter
];

export const asyncRoutes = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});

export default router;
