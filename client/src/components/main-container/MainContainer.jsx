import "./main-container.css";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import ChatArea from "../work-area/ChatArea";
import Welcome from "../work-area/Welcome";
import CreateGroups from "../work-area/CreateGroups";
import UserGroups from "../work-area/UserGroups";

const MainContainer = () => {
  const chatProps = {
    username: "John Doe",
    timeStamp: "12:34 PM",
    // Add other necessary props here
  };
  return (
    <div className="main-container">
      <Sidebar />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={chatProps} /> */}
      <UserGroups />
    </div>
  );
};

export default MainContainer;
