import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  loaderMain: {
    marginTop: '1rem',
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&>img': {
      width: '200px',
      objectFit: 'cover',
    },
  },
  loaderQuote: {
    color: 'black',
    height: '20px',
    '&>span': {
      color: '#fff75',
    },
  },
}));

export default useStyles;
