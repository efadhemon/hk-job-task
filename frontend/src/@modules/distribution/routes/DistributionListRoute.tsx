import { queryClient } from "@shared/config";
import { useCreateDistribution } from "@shared/hooks";
import { DistributionService } from "@shared/services";
import { Button, notification, PageHeader } from "antd";
import Modal from "antd/lib/modal/Modal";
import { AxiosResponse } from "axios";
import { useState } from "react";

import DistributionForm from "../components/DistributionForm";
import DistributionList from "../components/DistributionList";

const DistributionListRoute = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>();

  const distributeFood = useCreateDistribution({
    config: {
      onSuccess: (res: AxiosResponse) => {
        if (res?.data?.success) {
          setModalOpen(false);
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

  return (
    <>
      <PageHeader
        title="Distribution List"
        extra={[
          <Button key="1" onClick={() => setModalOpen(true)} type="primary">
            Distribute Sector
          </Button>,
        ]}
      >
        <DistributionList />
      </PageHeader>

      <Modal
        width={600}
        title="Distribute Sector"
        open={isModalOpen}
        footer={false}
        onCancel={() => setModalOpen(false)}
      >
        <DistributionForm
          onFinish={(values) => distributeFood.mutateAsync(values)}
          isLoading={distributeFood.isLoading}
        />
      </Modal>
    </>
  );
};

export default DistributionListRoute;
