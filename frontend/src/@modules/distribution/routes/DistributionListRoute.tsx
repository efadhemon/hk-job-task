import { queryClient } from "@shared/config";
import { useCreateDistribution, useDistributions } from "@shared/hooks";
import { DistributionService } from "@shared/services";
import { _ } from "@shared/utils";
import { Button, notification, PageHeader } from "antd";
import Modal from "antd/lib/modal/Modal";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import DistributionForm from "../components/DistributionForm";
import DistributionList from "../components/DistributionList";

const DistributionListRoute = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>();

  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useDistributions({
    options: {
      page: parseInt(searchParams.get("page")) || 1,
      limit: parseInt(searchParams.get("limit")) || 10,
    },
  });

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
        <DistributionList
          data={data?.data?.payload}
          isLoading={isLoading}
          pagination={{
            total: data?.data?.total,
            current: parseInt(searchParams.get("page")) || 1,
            pageSize: parseInt(searchParams.get("limit")) || 10,
            onChange: (page, limit) =>
              setSearchParams(_.toCleanObject({ page, limit })),
          }}
        />
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
