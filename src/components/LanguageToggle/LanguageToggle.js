import { Box, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  return (
    <Box>
      <Button sx={{ color: 'black' }} onClick={() => i18n.changeLanguage('en')}>
        EN
      </Button>
      <Button sx={{ color: 'black' }} onClick={() => i18n.changeLanguage('es')}>
        ES
      </Button>
    </Box>
  );
};

export default LanguageToggle;
