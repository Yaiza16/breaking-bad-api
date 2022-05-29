import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCharacters } from '../actions/characters';
import { Container, Grid } from '@mui/material';
import CharacterCard from '../components/CharacterCard/CharacterCard';

const MainPage = ({ getCharacters, dataCharacters }) => {
  const { characters, loading } = dataCharacters;
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Container disableGutters className="py-container" maxWidth="lg">
      {loading ? (
        <h2>LOADER AQUÍ</h2>
      ) : (
        <Grid container spacing={7}>
          {characters.length > 0 &&
            characters.map((character) => (
              <CharacterCard character={character} />
            ))}
        </Grid>
      )}
    </Container>
  );
};

MainPage.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  dataCharacters: state.characters,
});

export default connect(mapStateToProps, { getCharacters })(MainPage);
