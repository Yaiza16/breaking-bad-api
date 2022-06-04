import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Router from './routes/routes';
import store from './store';
import { Wrapper, Header, Footer } from './layout';
import theme from './theme';
import globalEs from './translation/es/global.json';
import globalEn from './translation/en/global.json';
import { fetchCharacters } from './features/character/characterSlice';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: { global: globalEs },

    en: { global: globalEn },
  },
});

store.dispatch(fetchCharacters());

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <SWRConfig
            value={{
              suspense: true,
              revalidateOnFocus: false,
              revalidateOnMount: false,
              revalidateOnReconnect: false,
            }}
          >
            <BrowserRouter>
              <Wrapper>
                <Header />
                <Router />
                <Footer />
              </Wrapper>
            </BrowserRouter>
          </SWRConfig>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
