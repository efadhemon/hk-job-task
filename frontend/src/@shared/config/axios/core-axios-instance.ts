import axios, { AxiosError, AxiosResponse } from 'axios';
import { ENV } from '../ENV';
import { storage } from '@shared/utils';
import { notification } from 'antd';

const headers = {
  'x-client-name': 'WEB',
  Authorization: `Bearer ${storage?.getToken()}`,
};

export const CoreAxiosInstance = axios.create({
  baseURL: ENV.API_END_POINT,
  timeout: 60000,
  headers,
});
CoreAxiosInstance.interceptors.request.use(
  (config: any) => {
    config.headers['Authorization'] = `Bearer ${storage?.getToken()}`;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
CoreAxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (response?.data?.success) {
    //   switch (response?.config?.method.toUpperCase()) {
    //     case 'POST':
    //       notification.success({
    //         message: 'Created Successfully',
    //         type: 'success',
    //       });
    //       return window.history.back();

    //     case 'PUT':
    //       notification.success({
    //         message: 'Updated successfully',
    //         type: 'success',
    //       });
    //       return window.history.back();

    //     case 'PATCH':
    //       notification.success({
    //         message: 'Updated successfully',
    //         type: 'success',
    //       });
    //       return window.history.back();
    //   }
    // }
    return response;
  },
  (error: AxiosError | any) => {
    if (error?.response?.status === 401) {
      storage.clear();
      window.location.assign(window.location.origin as unknown as string);
    } else if (error.response?.data?.success === false) {
      error.response?.data?.errorMessages?.map((x: string) => {
        return notification.error({
          message: x,
          duration: 100,
        });
      });
    }
    return error;
  }
);
