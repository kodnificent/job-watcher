import axios from "axios";

const http = axios

const api = http.create({
  baseURL: window.config.base_path + '/api/'
});

api.interceptors.response.use((res) => res, (error) => {
  if (error.response && error.response.status === 401) {
    window.localStorage.removeItem('authClient');
    location.href = ''
  }

  return Promise.reject(error);
});

export { http, api };

