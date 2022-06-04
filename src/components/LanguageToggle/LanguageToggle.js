import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

function LanguageToggle() {
  const { i18n } = useTranslation();
  return (
    <Box>
      <span className="fi fi-gr fis" style={{ width: '20px' }} />
      <Button sx={{ color: 'white' }} onClick={() => i18n.changeLanguage('en')}>
        EN
      </Button>
      <Button sx={{ color: 'white' }} onClick={() => i18n.changeLanguage('es')}>
        ES
      </Button>
    </Box>
  );
}

export default LanguageToggle;
