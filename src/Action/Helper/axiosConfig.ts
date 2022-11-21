import axios from 'axios';
import axiosRetry from 'axios-retry';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.defaults.timeout = 60000;
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {;
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.log(error.code);
      return 'timeout';
    }
    return Promise.reject(error);
  },
);

axiosRetry(instance, { retries: 0 });

export default instance;
