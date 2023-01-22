import axios, { AxiosError, AxiosResponse } from "axios";
import { ENV } from "../ENV";
import { notification } from "antd";

const headers = {
  "x-client-name": "WEB",
};

export const CoreAxiosInstance = axios.create({
  baseURL: ENV.API_END_POINT,
  timeout: 60000,
  headers,
});
CoreAxiosInstance.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
CoreAxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError | any) => {
    if (error?.response?.status === 401) {
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
