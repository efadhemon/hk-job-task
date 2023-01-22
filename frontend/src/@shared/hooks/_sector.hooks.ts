import { SectorService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

//---------------- useSectors hook ------------------------------------
type IUseSectors = {
  options?: IBaseFilter;
  config?: QueryConfig<typeof SectorService.filter>;
};
export const useSectors = ({ options, config }: IUseSectors = {}) => {
  return useQuery({
    ...config,
    queryKey: [SectorService.NAME, options],
    queryFn: () => SectorService.filter(options),
  });
};

//----------------------- useSector hook --------------------------------------
type IUseSector = {
  id: string;
  config?: QueryConfig<typeof SectorService.filterById>;
};

export const useSector = ({ id, config }: IUseSector) => {
  return useQuery({
    ...config,
    queryFn: () => SectorService.filterById(id),
  });
};

//------------------ useCreateSector hook ---------------------------------
type IUseCreateSector = {
  config?: MutationConfig<typeof SectorService.create>;
};

export const useCreateSector = ({ config }: IUseCreateSector = {}) => {
  return useMutation({
    ...config,
    mutationFn: SectorService.create,
  });
};

//------------------ useUpdateSector hook ----------------------------------
type IUseUpdateSector = {
  config?: MutationConfig<typeof SectorService.update>;
};

export const useUpdateSector = ({ config }: IUseUpdateSector = {}) => {
  return useMutation({
    ...config,
    mutationFn: SectorService.update,
  });
};

//------------------ useDeleteSector hook ----------------------------------
type IUseDeleteSector = {
  config?: MutationConfig<typeof SectorService.delete>;
};

export const useDeleteSector = ({ config }: IUseDeleteSector = {}) => {
  return useMutation({
    ...config,
    onSuccess: (res) => {
      if (res?.data?.success) {
        queryClient.invalidateQueries(SectorService.NAME);
        notification.success({
          message: res?.data?.message || "Sector successfully deleted",
        });
      }
    },
    mutationFn: SectorService.delete,
  });
};
