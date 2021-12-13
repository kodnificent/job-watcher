import { http } from '@/http';
import Dashboard from '@/views/Dashboard.vue';
import NotFound from '@/views/errors/404.vue';
import Login from '@/views/Login.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: Dashboard,
  },
  // {
  //   path: '/jobs',
  //   name: 'jobs',
  //   component: Jobs,
  // },
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

const authenticated = () => window.localStorage.getItem('authClient') !== null;

/**
 * Register the authentication guard.
 *
 * @param {VueRouter} router
 */
const registerAuthGuard = (router) => {
  router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !authenticated()) next({name: 'login'})
    else next()
  });

  // redirect to login for 401 responses.
  http.interceptors.response.use((res) => res, (error) => {
    // console.log(error)
    if (error.status === 401) {
      window.localStorage.removeItem('authClient')
      router.push({name: 'login'})
    }
  });
}

const registerGuestGuard = (router) => {
  router.beforeEach((to, from, next) => {
    if (to.name == 'login' && authenticated()) next({name: 'dashboard'})
    else next()
  });
}

const router = ({base}) => {
  const r = new VueRouter({
    base,
    mode: 'history',
    routes
  });

  registerAuthGuard(r)
  registerGuestGuard(r)

  return r
}

export default router;
