/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import { selectActiveUsers } from "../../features/authSlice";
import "../styles.css";
// import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const ConversationsItem = ({ userId, lastMessage, timeStamp, onClick }) => {
  const activeUsers = useSelector(selectActiveUsers);
  const user = activeUsers.find((user) => user._id === userId);
  const username = user ? user.username : "No Username";
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div onClick={onClick} className="conversation-container">
      <p className="conversation-icon">{username && username[0]}</p>
      <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
        {username}
      </p>
      <p className={"conversation-lastMessage" + (lightTheme ? "" : " dark")}>
        {lastMessage ? lastMessage : "No Message"}
      </p>
      <p className={"conversation-timeStamp" + (lightTheme ? "" : " dark")}>
        {timeStamp ? timeStamp : "No Time Stamp"}
      </p>
    </div>
  );
};

// ConversationsItem.propTypes = {
//   props: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     lastMessage: PropTypes.string.isRequired,
//     timeStamp: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ConversationsItem;
