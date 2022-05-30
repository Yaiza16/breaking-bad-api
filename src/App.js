import { Provider } from 'react-redux';
import { Wrapper, Header, Footer } from './layout';
import store from './store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4e8e5c',
      main: '#1f6032',
      dark: '#00350b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff161',
      main: '#f8bf2a',
      dark: '#c18f00',
      contrastText: '#000',
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Provider>
  );
}

export default App;
