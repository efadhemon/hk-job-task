import { Paths } from "@shared/constant";
import { useDeleteSector } from "@shared/hooks";
import { ISector } from "@shared/interfaces";
import { Button, PaginationProps, Popconfirm, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";
interface IProps {
  data: ISector[];
  isLoading?: boolean;
  pagination: PaginationProps;
}
const SectorList: React.FC<IProps> = ({ data, isLoading, pagination }) => {
  const navigate = useNavigate();

  const deleteSector = useDeleteSector();

  const dataSource = data?.map((x: ISector) => ({
    key: x?._id,
    id: x?._id,
    title: x?.title,
    isActive: x?.isActive.toString(),
  }));

  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "isActive",
      dataIndex: "isActive",
      key: "isActive",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id: any) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(Paths.sectorUpdate(id))}
          >
            Update
          </Button>
          <Popconfirm
            disabled
            title="Are you sure to delete it?"
            onConfirm={() => deleteSector.mutate(id)}
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

export default SectorList;
