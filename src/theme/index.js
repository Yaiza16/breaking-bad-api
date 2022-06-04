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
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
