// LoginForm.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginForm = ({ handleRegisterClick }) => {
  return (
    <div className={`wrapper ${!handleRegisterClick && "active"}`}>
      <span className="bg-animate"></span>
      <span className="bg-animate-2"></span>

      <div className="form-box login">
        <h2 className="animation" style={{ "--i": 0, "--j": 21 }}>
          Login
        </h2>
        <form action="#">
          <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
            <input type="text" required />
            <label>Username</label>
            <i className="bx bxs-user bx-tada"></i>
          </div>
          <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
            <input type="password" required autoComplete="current-password" />
            <label>Password</label>
            <i className="bx bxs-lock-alt bx-tada"></i>
          </div>
          <button
            type="submit"
            className="btn animation"
            style={{ "--i": 3, "--j": 24 }}
          >
            Login
          </button>
          <div
            className="logreg-link animation"
            style={{ "--i": 4, "--j": 25 }}
          >
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="register-link"
                onClick={handleRegisterClick}
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="login-info login">
        <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>
          FALCON NET
        </h2>
        <p className="animation" style={{ "--i": 1, "--j": 21 }}>
          Embark on a journey where every connection is a leap forward. Welcome
          to the Falcon Communications Network – where communication takes
          flight!
        </p>
        <p className="animation" style={{ "--i": 2, "--j": 22 }}>
          Elevate Your Connections, Elevate Your Experience – Falcon Net!
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
