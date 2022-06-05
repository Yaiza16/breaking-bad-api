import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function CharacterTabLine({ title, data }) {
  return (
    <div>
      <Typography variant="subtitle2">
        {`${title}: `}
        <Typography variant="subtitle1">{data}</Typography>
      </Typography>
    </div>
  );
}

CharacterTabLine.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default CharacterTabLine;
