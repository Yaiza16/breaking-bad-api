import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  quote: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    minHeight: '2.5rem',
    width: '100%',
    marginBottom: '0.5rem',
    '& button > span': {
      margin: '0',
    },
  },
}));

export default useStyles;
