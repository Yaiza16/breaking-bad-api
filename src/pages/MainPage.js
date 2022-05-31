import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Loader from '../components/Loader/Loader';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fetchCharacters } from '../features/character/characterSlice';

const MainPage = () => {
  const [t] = useTranslation('global');
  const { list: characters, loading } = useSelector((state) => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

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
        {characters &&
          characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard character={character} />
          ))}
      </Grid>
    </Container>
  );
};

export default MainPage;
