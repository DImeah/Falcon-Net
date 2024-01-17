import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "/falcon-bg.avif";
import "../styles.css";

const UserGroups = () => {
  return (
    <div className="list-container">
      <div className="ug-header">
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
        <p className="ug-title">Online Users</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon /> <input type="search" placeholder="search" />
        </IconButton>
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="conversation-icon">T</p>
          <p className="conversation-title">Test User</p>
        </div>
      </div>
    </div>
  );
};

export default UserGroups;
