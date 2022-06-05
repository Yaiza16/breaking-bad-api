import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ImageEs from '../../assets/images/spain.png';
import ImageEn from '../../assets/images/united-kingdom.png';

function LanguageToggle() {
  const [alignment, setAlignment] = useState('left');
  const { i18n } = useTranslation();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text-alignment"
      color="secondary"
    >
      <ToggleButton
        value="left"
        aria-label="spain-language"
        onClick={() => i18n.changeLanguage('es')}
        style={{ width: '50px', height: '50px' }}
      >
        <img
          alt="spain flat"
          src={ImageEs}
          style={{ objectFit: 'contain' }}
          width="35px"
        />
      </ToggleButton>
      <ToggleButton
        value="right"
        aria-label="english-language"
        onClick={() => i18n.changeLanguage('en')}
        style={{ width: '50px', height: '50px' }}
      >
        <img
          alt="united-kingdom-flat"
          src={ImageEn}
          style={{ objectFit: 'contain' }}
          width="35px"
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default LanguageToggle;
