import { Box, Button, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from '../theme/elements/layoutStyles';

function ErrorPage() {
  const [t] = useTranslation('global');
  const { errorPage } = useStyles();
  const location = useLocation();
  return (
    <Box className={errorPage}>
      <Typography variant="h4">{t(`${location.state.msg}`)}</Typography>
      <Typography variant="h1">Error 404</Typography>

      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained">Volver al inicio</Button>
      </NavLink>
    </Box>
  );
}

export default ErrorPage;
