import axios from 'axios';
import {BASE_URL} from '../config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

export default axiosInstance;
