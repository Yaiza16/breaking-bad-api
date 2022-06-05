import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { cardStyles } from '../theme/components';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Loader from '../components/Loader/Loader';
import PageTitle from '../components/PageTitle/PageTitle';

function MainPage() {
  const { cardsContainer } = cardStyles();
  const [t] = useTranslation('global');
  const {
    list: characters,
    loading,
    error,
  } = useSelector((state) => state.character);

  if (loading) return <Loader />;
  if (error) return <Navigate to="/404" state={{ msg: 'error.dataError' }} />;
  return (
    <Container disableGutters className="py-container" maxWidth="lg">
      <PageTitle text={t('title.mainPage')} />
      <Box
        columnGap={4}
        rowGap={4}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        paddingX={4}
        className={cardsContainer}
      >
        {characters &&
          characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard key={character.char_id} character={character} />
          ))}
      </Box>
    </Container>
  );
}

export default MainPage;
