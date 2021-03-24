import Vue from 'vue';
import VueRouter from 'vue-router';
import Channel from '../views/channel';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Channel',
    component: Channel,
  },
  {
    path: '/:id?',
    name: 'ChannelDetail',
    component: () => import('../views/channel/detail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
