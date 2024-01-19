/* eslint-disable react/prop-types */
// RegisterForm.jsx
import { Link } from "react-router-dom";
import "./login.css";

const RegisterForm = ({ handleLoginClick, registerHandler, changeHandler }) => {
  return (
    <div className={`wrapper ${!handleLoginClick && "active"}`}>
      <span className="bg-animate"></span>
      <span className="bg-animate-2"></span>

      <div className="form-box register">
        <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
          Register
        </h2>
        <form action="#">
          <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
            <input
              type="text"
              required
              name="username"
              onChange={(e) => changeHandler(e)}
            />
            <label>Username</label>
            <i className="bx bxs-user bx-tada"></i>
          </div>
          <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
            <input
              type="text"
              required
              name="email"
              onChange={(e) => changeHandler(e)}
            />
            <label>Email</label>
            <i className="bx bxs-envelope bx-tada"></i>
          </div>
          <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
            <input
              type="password"
              required
              name="password"
              onChange={(e) => changeHandler(e)}
            />
            <label>Password</label>
            <i className="bx bxs-lock-alt bx-tada"></i>
          </div>
          <button
            type="submit"
            className="btn animation"
            style={{ "--i": 21, "--j": 4 }}
            onClick={registerHandler}
          >
            Register
          </button>
          <div
            className="logreg-link animation"
            style={{ "--i": 22, "--j": 5 }}
          >
            <p>
              Already have an account?{" "}
              <Link
                // to="/login"
                className="login-link"
                onClick={handleLoginClick}
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="login-info register">
        <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
          FALCON NET
        </h2>
        <p className="animation" style={{ "--i": 18, "--j": 1 }}>
          Embark on a journey where every connection is a leap forward. Welcome
          to the Falcon Communications Network – where communication takes
          flight!
        </p>
        <p className="animation" style={{ "--i": 19 }}>
          Elevate Your Connections, Elevate Your Experience – Falcon Net!
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
