import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'unset',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
      color: 'unset',
    },
  },
}));

export default useStyles;
