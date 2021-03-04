import Layout from '@/layout';

export default {
  path: '/demo',
  component: Layout,
  children: [
    {
      path: 'api',
      component: () => import('@/views/demo/api.vue')
    }
  ]
};
