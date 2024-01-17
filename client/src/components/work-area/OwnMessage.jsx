import React from "react";

const OwnMessage = () => {
  var props2 = { username: "You", message: "THis is a sample message" };
  return (
    <div className="own-message-container">
      <div className="message-box">
        <p>{props2.message}</p>
        <p className="own-message-timestamp">12:00am</p>
      </div>
    </div>
  );
};

export default OwnMessage;
