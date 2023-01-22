import {
  IBaseFilter,
  IDistributionCreate,
  IDistributionUpdate,
} from "@shared/interfaces";

import { CoreAxiosInstance } from "@shared/config";
import { _ } from "@shared/utils";

const END_POINT: string = "/Distributions";

export const DistributionService = {
  NAME: END_POINT,
  create(payload: IDistributionCreate) {
    return CoreAxiosInstance.post(END_POINT, payload);
  },
  filter(options: IBaseFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${_.queryNormalizer(options)}`);
  },
  filterById(id: string) {
    return CoreAxiosInstance.get(`${END_POINT}/${id}`);
  },
  update(payload: IDistributionUpdate) {
    const { id } = payload;
    delete payload.id;
    return CoreAxiosInstance.patch(`${END_POINT}/${id}`, payload);
  },
  delete(id: string) {
    return CoreAxiosInstance.delete(`${END_POINT}/${id}`);
  },
};
