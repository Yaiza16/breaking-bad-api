import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function PageTitle({ text }) {
  return (
    <Typography variant="h3" textAlign="center" marginBottom="1.5rem">
      {text}
    </Typography>
  );
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
export default PageTitle;
