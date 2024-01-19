import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import "./sidebar.css";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/themeSlice.js";
import {
  clearUser,
  selectConversations,
  setCurrentConversation,
} from "../../features/authSlice.js";
import axios from "../../utils/axios.js";
import useAuth from "../../hooks/useAuth.jsx";
import useSocket from "../../hooks/useSocket.js";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAuth();
  const socket = useSocket();
  const lightTheme = useSelector((state) => state.themeKey);

  console.log(lightTheme);

  // const [lightTheme, setLightTheme] = useState(true);
  // const activeUsers = useSelector(selectActiveUsers);
  const conversations = useSelector(selectConversations);
  console.log(conversations);
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

  async function handleLogout() {
    // await axios.post()
    const response = await axios.post("/logout", { id: user?._id });
    console.log(response);
    if (response.data) {
      dispatch(clearUser());
      socket.on("activeUser", (data) => {
        console.log(data);
      });
    }
  }

  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton
            onClick={() => {
              navigate("welcome");
            }}
          >
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={handleLogout}>
            <LogoutRoundedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltRoundedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddRoundedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleRoundedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightRoundedIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeRoundedIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />{" "}
          <input
            type="search"
            placeholder="search"
            className={"input" + (lightTheme ? "" : " dark")}
          />
        </IconButton>
      </div>
      <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
        {conversations?.length ? (
          conversations?.map((user) => {
            return (
              <ConversationsItem
                className={"sb-conversation" + (lightTheme ? "" : " dark")}
                key={user.receiver}
                userId={user.receiver}
                onClick={() => {
                  dispatch(setCurrentConversation(user));
                  navigate("chat");
                }}
              />
            );
          })
        ) : (
          <p>No Conversation</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
