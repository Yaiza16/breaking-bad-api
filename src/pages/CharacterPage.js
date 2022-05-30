import React from 'react';
import { Container } from '@mui/system';
import { connect } from 'react-redux';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';

const CharacterPage = ({ character }) => {
  return (
    <Container className="py-container" sx={{ flexGrow: '1' }}>
      <CharacterDetails character={character} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  character: state.characters.currentCharacter,
});

export default connect(mapStateToProps)(CharacterPage);
