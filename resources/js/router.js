import VueRouter from 'vue-router';
import Vue from 'vue';
import NotFound from '@/views/errors/404';
import Dashboard from '@/views/Dashboard';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = ({base}) => {
  return new VueRouter({
    base,
    mode: 'history',
    routes
  });
}

export default router;
