import { createRouter, createWebHistory } from 'vue-router';
import Channel from '../views/channel';

const routes = [
  {
    path: '/',
    name: 'Channel',
    component: Channel,
  },
  {
    path: '/:id',
    name: 'ChannelDetail',
    component: () => import('../views/channel/detail'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
