import axios from "axios";

const http = axios

const api = http.create({
  baseURL: window.config.base_path + '/api/'
});

api.interceptors.response.use((res) => res, (error) => {
  if (! error.response) {
    // request never made it to the server
    return Promise.reject(error);
  }

  const status_code = error.response.status

  if (status_code === 401) {
    window.localStorage.removeItem('authClient');
    location.href = '';
    // @todo popup login modal instead
  }

  else if (status_code === 422) {
    // handle form error
  }

  else if (status_code >= 400 && status_code < 500) {
    // client errors
  }

  else {
    // server error
  }

  return Promise.reject(error);
});

export { http, api };

