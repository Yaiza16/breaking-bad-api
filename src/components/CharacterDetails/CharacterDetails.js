import { Container } from '@mui/system';
import React from 'react';

const CharacterDetails = ({ character }) => {
  return (
    <Container>
      <div>
        <img src="{character.img}" alt="" />
      </div>
    </Container>
  );
};

export default CharacterDetails;
