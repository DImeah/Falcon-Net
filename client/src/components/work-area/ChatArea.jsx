import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import OthersMessage from "./othersMessage";
import OwnMessage from "./ownMessage";

const ChatArea = ({ props }) => {
  return (
    <div className="chatarea-container">
      <div className="chatarea-header">
        <p className="conversation-icon">{props.username[0]}</p>
        <div className="header-text">
          <p className="conversation-title">{props.username}</p>
          <p className="conversation-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">
        <OthersMessage />
        <OwnMessage />
        <OthersMessage />
        <OwnMessage />
        <OthersMessage />
        <OwnMessage />
        <OthersMessage />
        <OwnMessage />
      </div>
      <div className="text-input-area">
        <input
          type="text"
          placeholder="Type a Message"
          className="search-box"
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

ChatArea.propTypes = {
  props: PropTypes.shape({
    username: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatArea;
