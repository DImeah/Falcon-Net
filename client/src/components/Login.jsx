import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import boxicon from "boxicons";
import "./login.css";

const Login = () => {
  //   const onFinish = (values) => {
  // //     console.log("Received values of form: ", values);
  //   };
  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
            <i className="bx bxs-user bx-tada"></i>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
            <i className="bx bxs-lock-alt bx-tada"></i>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="logreg-link">
            <p>
              Don't have an account?{" "}
              <a href="#" className="register-link">
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// <div className="p-2 ml-10 mr-10 rounded-2xl my-16 flex h-auto max-w-screen-xl login-background">
//       <div className="image-container gap-3 ">
//         <h1>FALCON NET</h1>
//         <div className="flex justify-center">
//           <img src="/falcon-bg.avif" alt="falcon logo" />
//         </div>

//         <p>
//           Embark on a journey where every connection is a leap forward. Welcome
//           to the Falcon Communications Network – where communication takes
//           flight!
//         </p>
//         <p>Elevate Your Connections, Elevate Your Experience – Falcon Net!</p>
//       </div>
//       <div className="login-container grid gap-5">
//         <h1>Register</h1>
//         <div>
//           <Form
//             name="normal_login"
//             className="login-form grid gap-3"
//             initialValues={{
//               remember: true,
//             }}
//             onFinish={onFinish}
//           >
//             <Form.Item
//               name="username"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Username!",
//                 },
//               ]}
//             >
//               <Input
//                 prefix={<UserOutlined className="site-form-item-icon" />}
//                 placeholder="Username"
//               />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Password!",
//                 },
//               ]}
//             >
//               <Input
//                 prefix={<LockOutlined className="site-form-item-icon" />}
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Item>
//             <Form.Item>
//               <Form.Item name="remember" valuePropName="checked" noStyle>
//                 <Checkbox>Remember me</Checkbox>
//               </Form.Item>

//               <a className="login-form-forgot" href="">
//                 Forgot password
//               </a>
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login-form-button"
//               >
//                 Log in
//               </Button>
//               Or <a href="">register now!</a>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
