import PropTypes from 'prop-types';
import { CardMedia } from '@mui/material';
import { cardStyles } from '../../../theme/components';

function CharacterImage({ image, name }) {
  const { cardImage } = cardStyles();
  return (
    <CardMedia
      component="img"
      className={cardImage}
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
