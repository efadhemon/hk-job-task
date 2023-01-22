import { ISectorCreate } from "@shared/interfaces";
import { Button, Col, Form, Input, Row } from "antd";
import { useEffect } from "react";

interface IProps {
  initialValues?: ISectorCreate;
  onFinish?: (values: ISectorCreate) => void;
  isLoading?: boolean;
}
const SectorForm: React.FC<IProps> = ({
  initialValues,
  onFinish,
  isLoading,
}) => {
  // reset form value
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [form, initialValues]);

  const onFinishForm = (value: ISectorCreate) => {
    onFinish(value);
    form.resetFields();
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
        <Col xs={24}>
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

export default SectorForm;
