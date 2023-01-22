import { IUserCreate } from "@shared/interfaces";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";
const { Option } = Select;

interface IProps {
  initialValues?: IUserCreate;
  onFinish?: (values: IUserCreate) => void;
  isLoading?: boolean;
}

const UserUpdateForm: React.FC<IProps> = ({
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
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please enter first name!",
              },
            ]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please enter last name!",
              },
            ]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please enter  phone number!",
              },
            ]}
          >
            <Input placeholder="Enter  phone number" type="tel" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a email!",
              },
              { type: "email", message: "Invalid email" },
            ]}
          >
            <Input placeholder="Enter a email" type="email" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Please select a role!",
              },
            ]}
          >
            <Select placeholder="Select a role">
              <Option value="SuperAdmin">SuperAdmin</Option>
              <Option value="InternalAdmin">InternalAdmin</Option>
              <Option value="InternalUser">InternalUser</Option>
              <Option value="ProviderAdmin">ProviderAdmin</Option>
              <Option value="ProviderBranchAdmin">ProviderBranchAdmin</Option>
              <Option value="Customer">Customer</Option>
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

export default UserUpdateForm;
