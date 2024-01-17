import React from "react";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import { IconButton } from "@mui/material";

const CreateGroups = () => {
  return (
    <div className="create-groups-container">
      <input className="search-box" placeholder="Enter Group Name" />
      <IconButton>
        <GroupAddRoundedIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
