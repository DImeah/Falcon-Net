import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectUser } from "../features/authSlice";

export default function useAuth() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    if (!user) {
      console.log("User not Authenticated");
      navigate("/auth");
    } else {
      if (
        location.pathname.includes("/auth") ||
        location.pathname.includes("/register")
      ) {
        navigate("/app/welcome");
      }
    }
  }, [user, navigate, location.pathname]);
  return user;
}
