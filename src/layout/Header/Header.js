import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar className="toolbar">
      <Toolbar>
        <h2>The Breaking Bad API</h2>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
