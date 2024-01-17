// Login.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./Login.css";

const Login = () => {
  const [active, setActive] = useState(false);

  // Function to handle the click event on the register link
  const handleRegisterClick = () => {
    console.log("Register link clicked");
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("active");
    setActive(true);
  };

  // Function to handle the click event on the login link
  const handleLoginClick = () => {
    console.log("Login link clicked");
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.remove("active");
    setActive(false);
  };

  console.log("Active class:", active);

  return (
    <Router>
      <div className={`wrapper ${active ? "active" : ""}`}>
        <Routes>
          <Route
            path="/login"
            element={<LoginForm handleRegisterClick={handleRegisterClick} />}
            // element={<LoginForm />}
          />
          <Route
            path="/register"
            element={<RegisterForm handleLoginClick={handleLoginClick} />}
            // element={<RegisterForm />}
          />
          {/* Add a wildcard route for unmatched paths */}
          <Route path="/*" element={<Navigate to="/login" />} />
          {/* <Route path="/*" element={<Navigate to="/register" />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Login;
