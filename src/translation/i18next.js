import i18next from 'i18next';
import globalEs from './es/global.json';
import globalEn from './en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: { global: globalEs },

    en: { global: globalEn },
  },
});

export default i18next;
