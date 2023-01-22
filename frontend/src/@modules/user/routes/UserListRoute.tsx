import { useUsers } from "@shared/hooks";
import { PageHeader } from "antd";
import { useSearchParams } from "react-router-dom";
import UserList from "../components/UserList";
import { _ } from "@shared/utils";

const UserListRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const usersQuery = useUsers({
    options: {
      page: parseInt(searchParams.get("page")) || 1,
      limit: parseInt(searchParams.get("limit")) || 10,
    },
  });

  return (
    <PageHeader title="User List">
      <UserList
        data={usersQuery?.data?.data?.payload}
        isLoading={usersQuery?.isLoading}
        pagination={{
          total: usersQuery?.data?.data?.total,
          current: parseInt(searchParams.get("page")) || 1,
          pageSize: parseInt(searchParams.get("limit")) || 10,
          onChange: (page, limit) =>
            setSearchParams(_.toCleanObject({ page, limit })),
        }}
      />
    </PageHeader>
  );
};
export default UserListRoute;
