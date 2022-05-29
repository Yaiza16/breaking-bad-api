import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';

const CharacterPage = ({ character }) => {
  return (
    <Container className="py-container">
      <Typography align="center" variant="h4">
        {character.name}
      </Typography>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  character: state.characters.currentCharacter,
});

export default connect(mapStateToProps)(CharacterPage);
