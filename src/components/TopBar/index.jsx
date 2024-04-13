import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  let context = "";

  // Extracting the relevant context based on the current URL pathname
  if (location.pathname === "/users") {
    context = "User List";
  } else if (location.pathname.startsWith("/users/")) {
    const userId = location.pathname.split("/").pop();
    // Fetch user details based on the userId
    const user = models.userModel(userId);
    context = `Details of ${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos/")) {
    const userId = location.pathname.split("/").pop();
    // Fetch user details based on the userId
    const user = models.userModel(userId);
    context = `Photos of ${user.first_name} ${user.last_name}`;
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit" className="topbar-left">
          Nguyễn Gia Khiên
        </Typography>
        <Typography variant="h6" color="inherit" className="topbar-right">
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;