import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "/falcon-bg.avif";
import "../styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const Groups = () => {
  const user = useAuth();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.25" }}
        className="list-container"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={"ug-header" + (lightTheme ? "" : " dark")}
        >
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
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Online Groups
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={"sb-search" + (lightTheme ? "" : " dark")}
        >
          <IconButton>
            <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />{" "}
            <input
              type="search"
              placeholder="search"
              className={"search" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </motion.div>
        <div className={"ug-list" + (lightTheme ? "" : " dark")}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"conversation-icon" + (lightTheme ? "" : " dark")}>
              G
            </p>
            <p className={"conversation-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Groups;
