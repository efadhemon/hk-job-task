import { DistributionService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

//---------------- useDistributions hook ------------------------------------
type IUseDistributions = {
  options?: IBaseFilter;
  config?: QueryConfig<typeof DistributionService.filter>;
};
export const useDistributions = ({
  options,
  config,
}: IUseDistributions = {}) => {
  return useQuery({
    ...config,
    queryKey: [DistributionService.NAME, options],
    queryFn: () => DistributionService.filter(options),
  });
};

//----------------------- useDistribution hook --------------------------------------
type IUseDistribution = {
  id: string;
  config?: QueryConfig<typeof DistributionService.filterById>;
};

export const useDistribution = ({ id, config }: IUseDistribution) => {
  return useQuery({
    ...config,
    queryFn: () => DistributionService.filterById(id),
  });
};

//------------------ useCreateDistribution hook ---------------------------------
type IUseCreateDistribution = {
  config?: MutationConfig<typeof DistributionService.create>;
};

export const useCreateDistribution = ({
  config,
}: IUseCreateDistribution = {}) => {
  return useMutation({
    ...config,
    mutationFn: DistributionService.create,
  });
};

//------------------ useUpdateDistribution hook ----------------------------------
type IUseUpdateDistribution = {
  config?: MutationConfig<typeof DistributionService.update>;
};

export const useUpdateDistribution = ({
  config,
}: IUseUpdateDistribution = {}) => {
  return useMutation({
    ...config,
    mutationFn: DistributionService.update,
  });
};

//------------------ useDeleteDistribution hook ----------------------------------
type IUseDeleteDistribution = {
  config?: MutationConfig<typeof DistributionService.delete>;
};

export const useDeleteDistribution = ({
  config,
}: IUseDeleteDistribution = {}) => {
  return useMutation({
    ...config,
    onSuccess: (res) => {
      if (res?.data?.success) {
        queryClient.invalidateQueries(DistributionService.NAME);
        notification.success({
          message: res?.data?.message || "Distribution successfully deleted",
        });
      }
    },
    mutationFn: DistributionService.delete,
  });
};
