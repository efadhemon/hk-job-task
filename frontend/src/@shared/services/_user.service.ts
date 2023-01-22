import { IBaseFilter, IUserCreate, IUserUpdate } from '@shared/interfaces';

import { CoreAxiosInstance } from '@shared/config';
import { _ } from '@shared/utils';

const END_POINT: string = '/users';

export const UserService = {
  NAME: END_POINT,
  create(payload: IUserCreate) {
    return CoreAxiosInstance.post(`${END_POINT}/register-user`, payload);
  },
  filter(options: IBaseFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${_.queryNormalizer(options)}`);
  },
  filterById(id: string) {
    return CoreAxiosInstance.get(`${END_POINT}/${id}`);
  },
  update(payload: IUserUpdate) {
    const { id } = payload;
    delete payload.id;
    return CoreAxiosInstance.patch(`${END_POINT}/${id}`, payload);
  },
  delete(id: string) {
    return CoreAxiosInstance.delete(`${END_POINT}/${id}`);
  },
  getPermissions() {
    return CoreAxiosInstance.get(`${END_POINT}/permissions`);
  },
};
