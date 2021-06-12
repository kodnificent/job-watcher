import VueRouter from 'vue-router';
import Vue from 'vue';
import NotFound from '@/views/errors/404';
import Dashboard from '@/views/Dashboard';
import Jobs from '@/views/Jobs';
import Login from '@/views/Login';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: '404',
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
