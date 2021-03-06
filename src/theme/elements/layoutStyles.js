import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    maxWidth: '100vw',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  routes: {
    display: 'flex',
    flexGrow: '1',
  },
  footer: {
    padding: '0.5rem',
    backgroundColor: theme.palette.grey.main,
  },
  errorPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
}));
export default useStyles;
