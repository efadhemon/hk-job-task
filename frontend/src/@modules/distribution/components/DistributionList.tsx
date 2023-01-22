import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import { IDistribution } from "@shared/interfaces";
import { useDeleteDistribution, useDistributions } from "@shared/hooks";

const DistributionList = () => {
  const deleteDistribution = useDeleteDistribution();

  const [dataQuantity, setDataQuantity] = useState({
    page: 1,
    limit: 10,
  });
  const { data, isLoading } = useDistributions({
    options: {
      page: dataQuantity.page,
      limit: dataQuantity.limit,
    },
  });

  const dataSource = data?.data?.payload?.map((x: IDistribution) => ({
    key: x._id,
    id: x._id,
    user: x.user,
    name: x.name,
    sector: x.Sector.title,
    termsCondition: x.termsCondition.toString(),
  }));

  const columns = [
    {
      title: "user",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "sector",
      dataIndex: "sector",
      key: "sector",
    },
    {
      title: "termsCondition",
      dataIndex: "termsCondition",
      key: "termsCondition",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id: any) => (
        <Space>
          <Button type="primary" disabled onClick={() => null}>
            Update
          </Button>
          <Popconfirm
            okButtonProps={{
              loading: false,
            }}
            title="Are you sure to delete this?"
            onConfirm={() => deleteDistribution.mutate(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="primary">
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
      pagination={{
        pageSize: 10,
        total: data?.data?.total,
        onChange: (page: number, limit: number) => {
          setDataQuantity({ page, limit });
        },
      }}
    />
  );
};

export default DistributionList;
