import { useCreateSector, useSectors } from "@shared/hooks";
import { Button, Modal, notification, PageHeader } from "antd";
import { useSearchParams } from "react-router-dom";
import SectorList from "../components/SectorList";
import { _ } from "@shared/utils";
import { useState } from "react";
import SectorForm from "../components/SectorForm";
import { AxiosResponse } from "axios";
import { SectorService } from "@shared/services";
import { queryClient } from "@shared/config";

const SectorListRoute = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>();

  const [searchParams, setSearchParams] = useSearchParams();
  const SectorsQuery = useSectors({
    options: {
      page: parseInt(searchParams.get("page")) || 1,
      limit: parseInt(searchParams.get("limit")) || 10,
    },
  });

  const createSector = useCreateSector({
    config: {
      onSuccess: (res: AxiosResponse) => {
        if (res?.data?.success) {
          setModalOpen(false);
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

  return (
    <>
      <PageHeader
        title="Sector List"
        extra={[
          <Button key={1} type="primary" onClick={() => setModalOpen(true)}>
            Create
          </Button>,
        ]}
      >
        <SectorList
          data={SectorsQuery?.data?.data?.payload}
          isLoading={SectorsQuery?.isLoading}
          pagination={{
            total: SectorsQuery?.data?.data?.total,
            current: parseInt(searchParams.get("page")) || 1,
            pageSize: parseInt(searchParams.get("limit")) || 10,
            onChange: (page, limit) =>
              setSearchParams(_.toCleanObject({ page, limit })),
          }}
        />
      </PageHeader>
      <Modal
        width={500}
        title="Add Sector"
        open={isModalOpen}
        footer={false}
        onCancel={() => setModalOpen(false)}
      >
        <SectorForm
          isLoading={createSector.isLoading}
          onFinish={(values) => createSector.mutateAsync(values)}
        />
      </Modal>
    </>
  );
};
export default SectorListRoute;
