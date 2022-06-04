import PropTypes from 'prop-types';
import { CardMedia } from '@mui/material';

function CharacterImage({ image, name }) {
  return (
    <CardMedia
      component="img"
      sx={{ width: 300 }}
      image={image}
      alt={`${name} image`}
    />
  );
}

CharacterImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharacterImage;
