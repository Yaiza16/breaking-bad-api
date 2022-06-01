import { Box, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <Box>
      <span class="fi fi-gr fis" style={{ width: '20px' }}></span>
      <Button sx={{ color: 'white' }} onClick={() => i18n.changeLanguage('en')}>
        EN
      </Button>
      <Button sx={{ color: 'white' }} onClick={() => i18n.changeLanguage('es')}>
        ES
      </Button>
    </Box>
  );
};

export default LanguageToggle;
