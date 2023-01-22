import {
  Button,
  Modal,
  notification,
  PaginationProps,
  Popconfirm,
  Space,
  Table,
} from "antd";
import { useState } from "react";
import { IDistribution, ISector } from "@shared/interfaces";
import { useDeleteDistribution, useUpdateDistribution } from "@shared/hooks";
import { AxiosResponse } from "axios";
import { queryClient } from "@shared/config";
import { DistributionService } from "@shared/services";
import DistributionForm from "./DistributionForm";

interface IProps {
  data: IDistribution[];
  isLoading?: boolean;
  pagination: PaginationProps;
}
const DistributionList: React.FC<IProps> = ({
  data,
  isLoading,
  pagination,
}) => {
  const [record, setRecord] = useState<IDistribution>();

  const deleteDistribution = useDeleteDistribution();

  const updateDistribution = useUpdateDistribution({
    config: {
      onSuccess: (res: AxiosResponse) => {
        if (res?.data?.success) {
          setRecord(null);
          queryClient.invalidateQueries(DistributionService.NAME);
          notification.success({
            message: res?.data?.message,
          });
        } else {
          notification.error({
            message: res?.data?.message || "Something is wrong",
          });
        }
      },
    },
  });

  const dataSource = data?.map((x: IDistribution) => ({
    key: x._id,
    _id: x._id,
    name: x.name,
    sectors: x.sectors,
    agreeToTerms: x.agreeToTerms?.toString(),
  }));

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "sectors",
      dataIndex: "sectors",
      key: "sectors",
      render: (sectors: ISector[]) => (
        <span>{sectors.map((s) => s.title).join(", ")}</span>
      ),
    },
    {
      title: "agreeToTerms",
      dataIndex: "agreeToTerms",
      key: "agreeToTerms",
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (id: any, data: any) => (
        <Space>
          <Button type="primary" onClick={() => setRecord(data)}>
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
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        pagination={pagination}
      />
      <Modal
        width={500}
        title="Edit Distribution"
        open={record ? true : false}
        footer={false}
        onCancel={() => setRecord(null)}
      >
        <DistributionForm
          initialValues={{
            ...record,
            sectors: record?.sectors?.map((s) => s._id),
          }}
          isLoading={updateDistribution.isLoading}
          onFinish={(values) =>
            updateDistribution.mutateAsync({
              _id: record._id,
              ...values,
            })
          }
        />
      </Modal>
    </>
  );
};

export default DistributionList;
