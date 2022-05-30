import { Typography } from '@mui/material';
import React from 'react';

const CharacterTitle = ({ name }) => {
  return (
    <Typography align="center" variant="h4" marginBottom={2}>
      {name}
    </Typography>
  );
};

export default CharacterTitle;
