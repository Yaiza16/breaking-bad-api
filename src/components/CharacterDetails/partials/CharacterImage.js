import { useContext } from 'react';
import { CardMedia } from '@mui/material';
import { CharacterContext } from '../CharacterDetails';
import { cardStyles } from '../../../theme/components';

function CharacterImage() {
  const { name, img } = useContext(CharacterContext);
  const { cardImage } = cardStyles();

  return (
    <CardMedia
      component="img"
      className={cardImage}
      image={img}
      alt={`${name} image`}
    />
  );
}

export default CharacterImage;
