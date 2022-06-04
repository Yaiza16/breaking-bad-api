import { createTheme } from '@mui/material/styles';

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
    grey: {
      light: '#f0f0f075',
      main: '#808080',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  variables: {
    boxShadow: '2px 4px 5px 2px rgba(0, 0, 0, 0.3) !important',
  },
});
export default theme;
