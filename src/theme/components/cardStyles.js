import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-evenly',
    },
  },
  cardGrid: {
    width: '250px',
    [theme.breakpoints.down('lg')]: {
      minWidth: '280px',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '300px',
    },
  },
  cardImage: {
    width: '300px !important',
    [theme.breakpoints.down('sm')]: {
      height: '420px !important',
      width: '420px !important',
    },
  },
  cardCharacter: {
    boxShadow: theme.variables.boxShadow,
    display: 'flex',
    width: '800px',
    [theme.breakpoints.down('md')]: {
      width: '680px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '420px',
    },
  },
  itemsDetail: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export default useStyles;
