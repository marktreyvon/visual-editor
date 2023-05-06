import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/editor/index.vue')
  }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;