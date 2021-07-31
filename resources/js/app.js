import router from '@/router';
import Vue from 'vue';

const config = window.config;
const app = new Vue({
  router: router({base: config.base_path}),
});

app.$mount('#app');
