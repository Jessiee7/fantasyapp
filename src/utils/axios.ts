import {constants} from '@/theme/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {urls} from './urls';

const instance = axios.create({
  baseURL: urls.BASE_URL,
});
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem(constants.AUTH_TOKEN);

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  error => {
    return error;
  },
);
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  },
);

export {instance as axios};
