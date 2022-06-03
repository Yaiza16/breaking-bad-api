import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function ErrorPage() {
  const [t] = useTranslation('global');
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      width="100%"
    >
      <Typography variant="h4">{t('error.msg')}</Typography>
      <Typography variant="h1">Error 404</Typography>

      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained">Volver al inicio</Button>
      </NavLink>
    </Box>
  );
}

export default ErrorPage;
