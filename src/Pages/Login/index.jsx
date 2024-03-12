import { Button, Form, Input } from "antd";
import { StyledForm } from "./style";
import { useNavigate } from "react-router-dom";
import "./style";

const Login = () => {
  const Navigate = useNavigate();

  const SubmitHandler = (values) => {
    console.log(values);
    Navigate("/home")
  };
  return (
    <StyledForm
      name="basic"
      labelCol={{
        span: 8,
      }}
      onFinish={SubmitHandler}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "لطفا نام کاربری را وارد کنید",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "لطفا گذرواژه را وارد کنید",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          ورود
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default Login;
