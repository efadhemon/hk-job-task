import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { IMAGES } from "@assets/images";
import { useAuth } from "@shared/hooks";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginFn } = useAuth();

  return (
    <Row align="middle" justify="center">
      <Col sm={24} md={10} lg={12}>
        <div
          className="h-screen hidden md:flex justify-center items-center"
          style={{
            // background: `url(${IMAGES.AuthBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "round",
          }}
        >
          <img style={{ width: 450 }} src={IMAGES.Logo} alt="logo" />
        </div>
      </Col>
      <Col sm={24} md={14} lg={12}>
        <div className="flex justify-center py-10">
          <div className="xl:w-1/2 md:w-3/4 sm:w-full sm:p-6 md:p-0">
            <h2 className="text-2xl font-semibold mb-20">
              Welcome to Health Bondhu
            </h2>

            <h4 className="text-lg text-gray-500 mb-6">Sign in</h4>
            <Form
              size="large"
              onFinish={(val) => {
                loginFn.mutateAsync(val);
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input prefix={<MdEmail />} placeholder="Email" type="email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password prefix={<MdLock />} placeholder="Password" />
              </Form.Item>
              <div className="flex justify-between mb-6">
                <Checkbox>Remember me</Checkbox>
                <Link to="/">Forgot password</Link>
              </div>
              <Form.Item>
                <Button
                  block
                  loading={loginFn.isLoading}
                  type="primary"
                  htmlType="submit"
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
