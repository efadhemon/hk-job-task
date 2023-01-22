import { useSectors, useUsers } from "@shared/hooks";
import { IDistributionCreate, ISector, IUser } from "@shared/interfaces";
import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import { useState } from "react";

interface IFProps {
  onFinish: (values: IDistributionCreate) => void;
  isLoading?: boolean;
}

const DistributionForm: React.FC<IFProps> = ({ onFinish, isLoading }) => {
  const Users = useUsers({}).data?.data?.payload;

  const sectors = useSectors().data?.data?.payload;

  const [date, setDate] = useState<string>("");
  const onSubmitForm = (values: any) => {
    values.date = date;
    onFinish(values);
  };

  return (
    <Form size="large" layout="vertical" onFinish={onSubmitForm}>
      <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label="User"
            name="User"
            rules={[
              {
                required: true,
                message: "Please select a User!",
              },
            ]}
          >
            <Select
              placeholder="Search User By Roll"
              style={{ width: "100%" }}
              optionFilterProp="children"
            >
              {Users?.map((user: IUser) => (
                <Select.Option key={user._id} value={user._id}>
                  {user.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label="Shift"
            name="shift"
            rules={[
              {
                required: true,
                message: "Please select a shift",
              },
            ]}
          >
            <Select placeholder="Select a shift">
              <Select.Option value="Morning">Morning</Select.Option>
              <Select.Option value="Day">Day</Select.Option>
              <Select.Option value="Night">Night</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please chose a date!",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => setDate(dateString)}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label="Sector Items"
            name="SectorItems"
            rules={[
              {
                required: true,
                message: "Please select Sectors",
              },
            ]}
          >
            <Select mode="multiple" placeholder="Select Sectors">
              {sectors?.map((Sector: ISector) => (
                <Select.Option key={Sector._id} value={Sector._id}>
                  {Sector.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Form.Item className="text-right">
            <Button loading={isLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default DistributionForm;
