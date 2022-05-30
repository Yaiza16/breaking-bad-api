import { CardMedia } from '@mui/material';
import React from 'react';

const CharacterImage = ({ image, name }) => {
  return (
    <CardMedia
      component="img"
      sx={{ width: 300 }}
      image={image}
      alt={`${name} image`}
    />
  );
};

export default CharacterImage;
