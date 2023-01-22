import { UserService } from '@shared/services';
import { IBaseFilter } from '@shared/interfaces';
import { MutationConfig, QueryConfig, queryClient } from '@shared/config';
import { useMutation, useQuery } from 'react-query';
import { notification } from 'antd';

//---------------- useUsers hook ------------------------------------
type IUseUsers = {
  options?: IBaseFilter;
  config?: QueryConfig<typeof UserService.filter>;
};
export const useUsers = ({ options, config }: IUseUsers = {}) => {
  return useQuery({
    ...config,
    queryKey: [UserService.NAME, options],
    queryFn: () => UserService.filter(options),
  });
};

//----------------------- useUser hook --------------------------------------
type IUseUser = {
  id: string;
  config?: QueryConfig<typeof UserService.filterById>;
};

export const useUser = ({ id, config }: IUseUser) => {
  return useQuery({
    ...config,
    queryFn: () => UserService.filterById(id),
  });
};

//------------------ useCreateUser hook ---------------------------------
type IUseCreateUser = {
  config?: MutationConfig<typeof UserService.create>;
};

export const useCreateUser = ({ config }: IUseCreateUser = {}) => {
  return useMutation({
    ...config,
    mutationFn: UserService.create,
  });
};

//------------------ useUpdateUser hook ----------------------------------
type IUseUpdateUser = {
  config?: MutationConfig<typeof UserService.update>;
};

export const useUpdateUser = ({ config }: IUseUpdateUser = {}) => {
  return useMutation({
    ...config,
    mutationFn: UserService.update,
  });
};

//------------------ useDeleteUser hook ----------------------------------
type IUseDeleteUser = {
  config?: MutationConfig<typeof UserService.delete>;
};

export const useDeleteUser = ({ config }: IUseDeleteUser = {}) => {
  return useMutation({
    ...config,
    onSuccess: (res) => {
      if (res?.data?.success) {
        queryClient.invalidateQueries(UserService.NAME);
        notification.success({
          message: 'User successfully deleted',
        });
      }
    },
    mutationFn: UserService.delete,
  });
};
