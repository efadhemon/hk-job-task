import { useSectors } from "@shared/hooks";
import { IDistributionCreate, ISector } from "@shared/interfaces";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";

interface IFProps {
  isLoading?: boolean;
  initialValues?: IDistributionCreate;
  onFinish: (values: IDistributionCreate) => void;
}
const DistributionForm: React.FC<IFProps> = ({
  onFinish,
  isLoading,
  initialValues,
}) => {
  const sectors = useSectors().data?.data?.payload;

  // reset form value
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [form, initialValues]);

  const onFinishForm = (values: any) => {
    form.resetFields();
    onFinish(values);
  };

  return (
    <Form
      size="large"
      layout="vertical"
      form={form}
      initialValues={initialValues}
      onFinish={onFinishForm}
    >
      <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter a name!",
              },
            ]}
          >
            <Input placeholder="Enter  a name" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label="sectors"
            name="sectors"
            rules={[
              {
                required: true,
                message: "Please select Sectors",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select Sectors"
              showSearch
              allowClear
              filterOption={(input, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {sectors?.map((sector: ISector) => (
                <Select.Option key={sector._id} value={sector._id}>
                  {sector.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Form.Item
            name="agreeToTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>Agree to terms</Checkbox>
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
