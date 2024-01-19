import React, { useEffect } from "react";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CreateGroups = () => {
  const user = useAuth();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/falcon-bg.avif"
          alt="falcon logo"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            margin: "10px",
          }}
        />
        <div style={{ fontSize: "20px" }}>FALCON NET </div>
      </div> */}
      <div className={"create-groups-container" + (lightTheme ? "" : " dark")}>
        <input
          className={"search-box" + (lightTheme ? "" : " dark")}
          placeholder="Enter Group Name"
        />
        <IconButton>
          <GroupAddRoundedIcon
            className={"icon" + (lightTheme ? "" : " dark")}
          />
        </IconButton>
      </div>
    </>
  );
};

export default CreateGroups;
