import { ISectorCreate } from "@shared/interfaces";
import { Button, Col, Form, Input, Radio, Row, Select } from "antd";
import { useEffect } from "react";
const { Option } = Select;

interface IProps {
  initialValues?: ISectorCreate;
  onFinish?: (values: ISectorCreate) => void;
  isLoading?: boolean;
}

const SectorCreateForm: React.FC<IProps> = ({
  initialValues,
  onFinish,
  isLoading,
}) => {
  // reset form value
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [form, initialValues]);

  return (
    <Form
      size="large"
      layout="vertical"
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
        <Col xs={24} sm={24} md={12}>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter a title!",
              },
            ]}
          >
            <Input placeholder="Enter  a title" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12}>
          <Form.Item label="Is Active" name="isActive">
            <Radio.Group buttonStyle="solid" className="w-full">
              <Radio.Button className="w-1/2 text-center" value={true}>
                True
              </Radio.Button>
              <Radio.Button className="w-1/2 text-center" value={false}>
                False
              </Radio.Button>
            </Radio.Group>
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

export default SectorCreateForm;
