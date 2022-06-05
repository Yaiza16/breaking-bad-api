import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { I18nextProvider } from 'react-i18next';
import { CssBaseline } from '@mui/material';
import i18next from './translation/i18next';
import Router from './routes/routes';
import store from './store';
import theme from './theme';
import { Wrapper, Header, Footer } from './layout';
import { fetchCharacters } from './features/character/characterSlice';

store.dispatch(fetchCharacters());

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
