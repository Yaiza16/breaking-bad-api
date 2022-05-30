import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar className="toolbar" position="static">
      <Toolbar>
        <Link to="/" className="reset-link">
          <h2>The Breaking Bad API</h2>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
