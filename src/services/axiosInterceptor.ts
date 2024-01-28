import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const AxiosRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  return config;
};

const AxiosResponseInterceptor = {
  result(response: AxiosResponse) {
    return response;
  },

  error(errorResponse: AxiosError) {
    return Promise.reject(errorResponse);
  },
};

axios.defaults.timeout = 60000;
axios.interceptors.request.use(AxiosRequestInterceptor);
axios.interceptors.response.use(
  AxiosResponseInterceptor.result,
  AxiosResponseInterceptor.error,
);
