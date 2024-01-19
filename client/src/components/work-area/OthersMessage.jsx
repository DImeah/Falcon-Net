import React from "react";
import { useSelector } from "react-redux";

const OthersMessage = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  var props1 = { username: "OtherUser", message: "This is a sample message" };

  return (
    <div className="others-message-container">
      <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
        <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
          {props1.username[0]}
        </p>
        <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
          <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
            {props1.username}
          </p>
          <p
            className={"conversation-lastMessage" + (lightTheme ? "" : " dark")}
          >
            {props1.lastMessage}
          </p>
          <p className={"own-message-timestamp" + (lightTheme ? "" : " dark")}>
            12:00am
          </p>
        </div>
      </div>
    </div>
  );
};

export default OthersMessage;
