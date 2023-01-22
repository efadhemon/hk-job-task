import { AuthService } from "@shared/services";
import { useMutation } from "react-query";
import { notification } from "antd";

export const useAuth = () => {
  const loginFn = useMutation(AuthService.login, {
    onSuccess: async (res) => {
      if (res.data?.success) {
        notification.success({
          message: "Login Success",
        });
      } else {
        notification.error({ message: res?.data?.message });
      }
    },
  });
  const logoutFn = () => {};

  const loadUserFn = () => {};

  return {
    loginFn,
    logoutFn,
    loadUserFn,
  };
};
