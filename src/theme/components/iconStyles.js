import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#000 !important',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: `${theme.palette.primary.main} !important`,
    },
    '&>svg': {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
}));

export default useStyles;
