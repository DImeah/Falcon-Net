import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import OthersMessage from "./OthersMessage";
import OwnMessage from "./OwnMessage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useSocket from "../../hooks/useSocket";
import { selectCurrentConversation } from "../../features/authSlice";
// import { socket } from "../../socket";

const ChatArea = () => {
  const user = useAuth();
  const { socket } = useSocket();
  const [message, setMessage] = useState("");
  const currentConversation = useSelector(selectCurrentConversation);
  // console.log(socket);
  console.log(message);
  const canContinue = message;

  console.log(currentConversation);

  useEffect(() => {
    if (socket) {
      socket.on("testing-client", (data) => {
        console.log(data);
      });
    }
  }, [socket]);

  // useEffect(() => {
  //   socket.on("testing-client", (data) => {
  //     console.log(data, user);
  //   });
  // }, []);

  const lightTheme = useSelector((state) => state.themeKey);
  // const [conversations, setConversations] = useState([
  //   {
  //     username: "Contact#1",
  //     lastMessage: "Hello, how are you?",
  //     timeStamp: "today",
  //   },
  //   {
  //     username: "Contact#2",
  //     lastMessage: "Hello, how are you?",
  //     timeStamp: "today",
  //   },
  //   {
  //     username: "Contact#3",
  //     lastMessage: "Hello, how are you?",
  //     timeStamp: "today",
  //   },
  // ]);

  // var props = conversations[0];
  function handleSendMessage(e) {
    e.preventDefault();
    console.log(message);
    if (socket && user?._id) {
      console.log({ currentConversation, message, user });
      socket.emit("sendMessage", {
        sender: currentConversation.sender,
        receiver: currentConversation.receiver,
        message: {
          message,
        },
      });
      setMessage("");
    }
  }
  return (
    <div className="chatarea-container">
      {/* <div className={"chatarea-header" + (lightTheme ? "" : " dark")}>
        <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
          {props.username[0]}
        </p>
        <div className={"header-text" + (lightTheme ? "" : " dark")}>
          <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
            {props.username}
          </p>
          <p className={"conversation-timeStamp" + (lightTheme ? "" : " dark")}>
            {props.timeStamp}
          </p>
        </div>
        <IconButton>
          <DeleteIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
      </div> */}
      <div className={"messages-container" + (lightTheme ? "" : " dark")}>
        {/* <OthersMessage /> */}
        {/* <OwnMessage />
        <OthersMessage />
        <OwnMessage />
        <OthersMessage />
        <OwnMessage />
        <OthersMessage />
        <OwnMessage /> */}
      </div>
      <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
        <input
          type="text"
          value={message}
          placeholder="Type a Message"
          onChange={(e) => setMessage(e.target.value)}
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
        <IconButton disabled={!canContinue}>
          <SendIcon
            onClick={handleSendMessage}
            className={"icon" + (lightTheme ? "" : " dark")}
          />
        </IconButton>
      </div>
    </div>
  );
};

// ChatArea.propTypes = {
//   props: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     timeStamp: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ChatArea;
