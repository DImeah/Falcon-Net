import "./main-container.css";
import { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
// import ChatArea from "../work-area/ChatArea";
// import Welcome from "../work-area/Welcome";
// import CreateGroups from "../work-area/CreateGroups";
// import UserGroups from "../work-area/Users";
import { Outlet } from "react-router-dom";
import useSocket from "../../hooks/useSocket";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { activeUsers, setConversations } from "../../features/authSlice";

const MainContainer = () => {
  const user = useAuth();
  const { socket } = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket && user?._id) {
      socket.emit("getActiveUsers", user._id);
      socket.on("activeUsers", (users) => {
        if (users) {
          dispatch(activeUsers(users));
        }
      });

      socket.emit("getConversations", user?._id);
      socket.on("conversations", (Conversations) => {
        console.log(Conversations);
        dispatch(setConversations(Conversations));
      });
    }
  }, [dispatch, socket, user?._id]);
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
      {/* <Welcome />
      <CreateGroups />
      <ChatArea />
      <UserGroups /> */}
    </div>
  );
};

export default MainContainer;
