import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCharacters } from '../actions/characters';
import { Container, Grid, Typography } from '@mui/material';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Loader from '../components/Loader/Loader';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MainPage = ({ getCharacters, dataCharacters }) => {
  const [t] = useTranslation('global');

  const { characters, loading } = dataCharacters;
  useEffect(() => {
    getCharacters();
  }, []);

  if (loading) return <Loader />;
  return (
    <Container disableGutters className="py-container" maxWidth="lg">
      <Typography variant="h3" textAlign={'center'} marginBottom="1.5rem">
        {t('title.mainPage')}
      </Typography>
      <Grid
        container
        spacing={7}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard character={character} />
          ))}
      </Grid>
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
