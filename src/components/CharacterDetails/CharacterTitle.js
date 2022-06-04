import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function CharacterTitle({ name }) {
  return (
    <Typography align="center" variant="h4" marginBottom={2}>
      {name}
    </Typography>
  );
}

CharacterTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CharacterTitle;
