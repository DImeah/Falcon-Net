import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import "./sidebar.css";
import { IconButton } from "@mui/material";

const Sidebar = () => {
  const [conversations, setConversations] = useState([
    {
      username: "Contact#1",
      lastMessage: "Hello, how are you?",
      timeStamp: "today",
    },
    {
      username: "Contact#2",
      lastMessage: "Hello, how are you?",
      timeStamp: "today",
    },
    {
      username: "Contact#3",
      lastMessage: "Hello, how are you?",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAltRoundedIcon />
          </IconButton>
          <IconButton>
            <GroupAddRoundedIcon />
          </IconButton>
          <IconButton>
            <AddCircleRoundedIcon />
          </IconButton>
          <IconButton>
            <NightlightRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon /> <input type="search" placeholder="search" />
        </IconButton>
      </div>
      <div className="sb-conversation">
        {conversations.map((conversation) => {
          return (
            <ConversationsItem
              key={conversation.username}
              props={conversation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
