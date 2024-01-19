// Login.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Link,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Outlet } from "react-router-dom";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
// import axios from "axios";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authSlice";
import useAuth from "../../hooks/useAuth";
import axios from "../../utils/axios";
import { useCookies } from "react-cookie";

const Login = () => {
  const user = useAuth();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [cookies, setCookies] = useCookies(["token"]);

  const [loginStatus, setLoginStatus] = React.useState("");
  const [registerStatus, setRegisterStatus] = React.useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const navigate = useNavigate();

  // Function to handle the click event on the register link
  const handleRegisterClick = () => {
    // const wrapper = document.querySelector(".wrapper");
    // wrapper.classList.add("active");
    setIsLoginForm(false);
    setActive(true);
    // navigate("/register");
  };

  // Function to handle the click event on the login link
  const handleLoginClick = () => {
    // const wrapper = document.querySelector(".wrapper");
    // wrapper.classList.remove("active");
    setActive(false);
    setIsLoginForm(true);
    // navigate("/login");
  };

  console.log("Active class:", active);

  // const changeHandler = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  const changeHandler = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };

      const response = await axios.post("/register", data, config);
      console.log("Register: ", response.data);
      setRegisterStatus({ msg: "Success", key: Math.random() });
      dispatch(setUser(response.data));
      setCookies("token", response.data.token);
      navigate("/app/welcome");
      setLoading(false);
    } catch (error) {
      if (error.response.status === 405) {
        setLoginStatus({
          msg: "User with this email ID already exists",
          key: Math.random(),
        });
      }
    }
    setLoading(false);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };

      const response = await axios.post("/login", data, config);
      console.log("Login: ", response);
      setLoginStatus({ msg: "Success", key: Math.random() });
      setLoading(false);

      dispatch(setUser(response.data));
      console.log(response.data.token);

      setCookies("token", response.data.token);
      navigate("/app/welcome");
    } catch (error) {
      setLoginStatus({
        msg: "Invalid Username or Password",
        key: Math.random(),
      });
    }
    setLoading(false);
  };

  return (
    <>
      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleRegisterClick}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <div className={`wrapper ${active ? "active" : ""}`}>
        {isLoginForm ? (
          <LoginForm
            isLoginForm={isLoginForm}
            setIsLoginForm={setIsLoginForm}
            handleRegisterClick={handleRegisterClick}
            loginHandler={loginHandler}
            changeHandler={changeHandler}
          />
        ) : (
          <RegisterForm
            isLoginForm={isLoginForm}
            setIsLoginForm={setIsLoginForm}
            handleLoginClick={handleLoginClick}
            registerHandler={registerHandler}
            changeHandler={changeHandler}
          />
        )}
      </div>
    </>
  );
};

export default Login;
