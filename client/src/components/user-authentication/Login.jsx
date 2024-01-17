import React, { useState } from "react";
import "./loginRegister.css";

const Login = () => {
  const [action, setAction] = useState("Register");

  return (
    <div className="login-container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <i className="bx bxs-user bx-tada"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <i className="bx bxs-envelope bx-tada"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <i className="bx bxs-lock-alt bx-tada"></i>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction;
          }}
        >
          Register
        </div>
        <div className={action === "Register" ? "submit gray" : "submit"}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
