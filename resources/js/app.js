import Vue from 'vue';
import router from '@/router';

const app = new Vue({
  router: router({base: '/job-watcher'}),
});

app.$mount('#app');
