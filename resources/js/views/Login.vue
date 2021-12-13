<template>
  <div class="bg-gray-100 py-12 px-8 min-h-screen flex justify-center items-center">
    <div class="w-full max-w-[350px] bg-white shadow-md rounded-sm py-8 px-4">
      <img src="/vendor/job-watcher/imgs/job-watcher.svg" alt="job-watcher logo">
      <h1 class="text-primary text-2xl text-center mt-2 uppercase font-bold">
        <router-link to="login">Authentication</router-link>
      </h1>

      <form class="mt-8" @submit="login">
        <div class="mb-3">
          <label for="username" class="block text-xs uppercase mb-1 text-gray-700 font-semibold">Username</label>
          <input
            id="username"
            v-model="username"
            class="rounded w-full form-input focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
            type="text" name="username" placeholder="root" />
          <small aria-live="assertive" class="text-red-600">
            <span v-if="field_errors.username">{{ field_errors.username[0] }}</span>
          </small>
        </div>
        <div class="mb-3">
          <label for="password" class="block text-xs uppercase mb-1 text-gray-700 font-semibold">Password</label>
          <input
            id="password"
            v-model="password"
            class="rounded w-full form-input focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
            type="password" name="password" placeholder="password" />
          <small aria-live="assertive" class="text-red-600">
            <span v-if="field_errors.password">{{ field_errors.password[0] }}</span>
          </small>
        </div>
        <div class="mb-3">
          <small aria-live="assertive" class="text-red-600">
            <span v-if="field_errors.credentials">{{ field_errors.credentials[0] }}</span>
          </small>
        </div>
        <div class="mt-2 inline-flex items-center">
          <input
            id="remember"
            v-model="remember"
            type="checkbox"
            name="remember"
            class="rounded form-checkbox text-primary focus:ring-4 focus:ring-primary focus:ring-opacity-50"
          />
          <label for="remember" class="ml-3">Remember me</label>
        </div>

        <button
          class="mt-3 w-full bg-primary rounded px-3 h-[40px] text-center
            font-semibold focus:outline-none focus:ring-4
            focus:ring-primary focus:ring-opacity-50"
          type="submit"
          aria-live="polite">
            <span v-if="!authenticating" class="text-white uppercase">Login</span>
            <div v-else class="flex items-center justify-center">
              <img aria-hidden="true" src="/vendor/job-watcher/imgs/spin-1.5s-28px.svg" alt="loading icon">
              <span class="sr-only">Loading</span>
            </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { api } from '@/http';
// import Spin from l;

export default {
  data() {
    return {
      username: null,
      password: null,
      remember: localStorage.getItem('rememberLogin') === 'yes' ? true : false,
      field_errors: {},
      authenticating: false,
      http_status: null
    }
  },
  methods: {
    login(e) {
      e.preventDefault();

      const d = {
        username: this.username,
        password: this.password,
        remember: this.remember
      }

      this.field_errors = {};
      this.authenticating = true;

      api.post('login', d).then(res => {
        localStorage.setItem('authClient', JSON.stringify(res.data.client));
        localStorage.setItem('rememberLogin', this.remember ? 'yes' : 'no');
        this.$router.push({name: 'dashboard'});
      }).catch(err => {
        if (err.response) {
          this.http_status = err.response.status;
          if (this.http_status === 422) this.field_errors = err.response.data.errors;
        }
      }).then(() => {
        this.authenticating = false;
      });
    }
  },
  mounted() {
    //
  }
}
</script>
