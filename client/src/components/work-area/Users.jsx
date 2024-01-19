/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "/falcon-bg.avif";
import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveUsers,
  selectConversations,
  setConversations,
} from "../../features/authSlice";
import useSocket from "../../hooks/useSocket";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Users = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const activeUsers = useSelector(selectActiveUsers);
  console.log(activeUsers);

  return (
    <div className="list-container">
      <div className={"ug-header" + (lightTheme ? "" : " dark")}>
        <img
          src={logo}
          alt="Falcon Net Logo"
          style={{
            height: "2rem",
            width: "2rem",
            marginLeft: "10px",
            borderRadius: "50%",
          }}
        />
        <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Users</p>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />{" "}
          <input
            type="search"
            placeholder="search"
            className={"search-box" + (lightTheme ? "" : " dark")}
          />
        </IconButton>
      </div>
      <div className={"ug-list" + (lightTheme ? "" : " dark")}>
        {!!activeUsers?.length &&
          activeUsers?.map((user) => (
            <SingleUser
              key={user._id}
              username={user.username}
              otherUserId={user._id}
            />
          ))}
      </div>
    </div>
  );
};

function SingleUser({ username, otherUserId }) {
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const user = useAuth();
  const socket = useSocket();
  const conversations = useSelector(selectConversations);

  function handleStartConversation() {
    const friend = conversations.find(
      (conversation) => conversation.receiver === otherUserId
    );
    otherUserId;
    if (!friend) {
      dispatch(
        setConversations([
          ...conversations,
          {
            sender: user?._id,
            receiver: otherUserId,
          },
        ])
      );
    }
  }

  return (
    <div
      onClick={handleStartConversation}
      className={"list-item" + (lightTheme ? "" : " dark")}
    >
      <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
        {username[0].toUpperCase()}
      </p>
      <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
        {username}
      </p>
    </div>
  );
}

export default Users;
