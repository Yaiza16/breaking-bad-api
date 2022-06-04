import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkStyles } from '../theme/components/index';
import LanguageToggle from '../components/LanguageToggle/LanguageToggle';

function Header() {
  const { link } = linkStyles();
  return (
    <AppBar sx={{ width: '100%' }} position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/" className={link}>
          <Typography variant="h5">The Breaking Bad API</Typography>
        </Link>
        <LanguageToggle />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
