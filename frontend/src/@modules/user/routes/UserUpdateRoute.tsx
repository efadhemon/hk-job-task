import Purify from "@shared/components/Purify";
import { useUser, useUpdateUser } from "@shared/hooks";
import { notification, PageHeader } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import UserUpdateForm from "../components/UserUpdateForm";

const UserUpdateRoute = () => {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const { data, isLoading } = useUser({ id });

  const updateUser = useUpdateUser({
    config: {
      onSuccess: (res) => {
        if (res?.data?.success) {
          navigate(-1);
          notification.success({
            message: "Updated successfully",
          });
        }
      },
    },
  });

  return (
    <Purify loading={isLoading}>
      <PageHeader onBack={() => navigate(-1)} title="Update User">
        <UserUpdateForm
          initialValues={data?.data?.payload}
          isLoading={updateUser.isLoading}
          onFinish={(values) => updateUser.mutateAsync({ ...values, id })}
        />
      </PageHeader>
    </Purify>
  );
};
export default UserUpdateRoute;
