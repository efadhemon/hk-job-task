import { Paths } from "@shared/constant";
import { useDeleteUser } from "@shared/hooks";
import { IUser } from "@shared/interfaces";
import { Button, PaginationProps, Popconfirm, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";
interface IProps {
  data: IUser[];
  isLoading?: boolean;
  pagination: PaginationProps;
}
const UserList: React.FC<IProps> = ({ data, isLoading, pagination }) => {
  const navigate = useNavigate();

  const deleteUser = useDeleteUser();

  const dataSource = data?.map((x: IUser) => ({
    key: x?._id,
    id: x?._id,
    name: x?.name,
    email: x?.email,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id: any) => (
        <Space>
          <Button type="primary" onClick={() => navigate(Paths.userUpdate(id))}>
            Update
          </Button>
          <Popconfirm
            disabled
            title="Are you sure to delete this User?"
            onConfirm={() => deleteUser.mutate(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button disabled danger type="primary">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      pagination={pagination}
    />
  );
};

export default UserList;
