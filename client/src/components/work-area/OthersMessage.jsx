import React from "react";

const OthersMessage = () => {
  var props1 = { username: "OtherUser", message: "This is a sample message" };

  return (
    <div className="others-message-container">
      <div className="conversation-container">
        <p className="conversation-icon">{props1.username[0]}</p>
        <div className="other-text-content">
          <p className="conversation-title">{props1.username}</p>
          <p className="conversation-lastMessage">{props1.lastMessage}</p>
          <p className="own-message-timestamp">12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default OthersMessage;
