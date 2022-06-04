import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle/LanguageToggle';

function Header() {
  return (
    <AppBar className="toolbar" position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/" className="reset-link">
          <h2>The Breaking Bad API</h2>
        </Link>
        <LanguageToggle />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
