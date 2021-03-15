import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  timeout: 10000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response.status) {
      case 401:
        ElMessage.error(error.response.statusText);
        break;
      case 403:
        ElMessage.error(error.response.statusText);
        break;
      case 500:
        ElMessage.error(error.response.statusText);
        break;
      case 503:
        ElMessage.error(error.response.statusText);
        break;
    }
    return Promise.reject(error);
  }
);

export { service };
