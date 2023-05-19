import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('views/home.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/editor/index.vue')
  },
  {
    path: '/display',
    name: 'display',
    component: () => import('@/display/index.vue')
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;