import { useDeleteSector, useUpdateSector } from "@shared/hooks";
import { ISector } from "@shared/interfaces";
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
import SectorForm from "./SectorForm";
import { SectorService } from "@shared/services";
import { queryClient } from "@shared/config";
import { AxiosResponse } from "axios";
interface IProps {
  data: ISector[];
  isLoading?: boolean;
  pagination: PaginationProps;
}
const SectorList: React.FC<IProps> = ({ data, isLoading, pagination }) => {
  const [record, setRecord] = useState<ISector>();

  const deleteSector = useDeleteSector();

  const updateSector = useUpdateSector({
    config: {
      onSuccess: (res: AxiosResponse) => {
        if (res?.data?.success) {
          setRecord(null);
          queryClient.invalidateQueries(SectorService.NAME);
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

  const dataSource = data?.map((x: ISector) => ({
    key: x?._id,
    _id: x?._id,
    title: x?.title,
  }));

  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
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
            title="Are you sure to delete it?"
            onConfirm={() => deleteSector.mutate(id)}
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
        title="Edit Sector"
        open={record ? true : false}
        footer={false}
        onCancel={() => setRecord(null)}
      >
        <SectorForm
          initialValues={record}
          isLoading={updateSector.isLoading}
          onFinish={(values) =>
            updateSector.mutateAsync({ _id: record._id, ...values })
          }
        />
      </Modal>
    </>
  );
};

export default SectorList;
