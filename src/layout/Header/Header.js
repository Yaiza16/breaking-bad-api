import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar className="toolbar" position="static">
      <Toolbar>
        <h2>The Breaking Bad API</h2>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
