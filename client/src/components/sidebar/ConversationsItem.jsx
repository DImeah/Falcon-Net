import React from "react";
import PropTypes from "prop-types";
import "../styles.css";

const ConversationsItem = ({ props }) => {
  return (
    <div className="conversation-container">
      <p className="conversation-icon">{props.username[0]}</p>
      <p className="conversation-title">{props.username}</p>
      <p className="conversation-lastMessage">{props.lastMessage}</p>
      <p className="conversation-timeStamp">{props.timeStamp}</p>
    </div>
  );
};

ConversationsItem.propTypes = {
  props: PropTypes.shape({
    username: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConversationsItem;
