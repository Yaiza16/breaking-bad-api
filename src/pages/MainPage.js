import { useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Loader from '../components/Loader/Loader';
import PageTitle from '../components/PageTitle/PageTitle';

function MainPage() {
  const [t] = useTranslation('global');
  const {
    list: characters,
    loading,
    error,
  } = useSelector((state) => state.character);

  if (loading) return <Loader />;
  if (error) return <Navigate to="/404" state={{ msg: 'error.dataError' }} />;
  return (
    // <Container disableGutters className="py-container" maxWidth="lg">
    //   <PageTitle text={t('title.mainPage')} />
    //   <Grid
    //     container
    //     spacing={4}
    //     component={motion.div}
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //   >
    //     {characters &&
    //       characters.length > 0 &&
    //       characters.map((character) => (
    //         <CharacterCard character={character} />
    //       ))}
    //   </Grid>
    // </Container>
    <Container disableGutters className="py-container" maxWidth="lg">
      <PageTitle text={t('title.mainPage')} />
      <Box
        display="flex"
        flexWrap="wrap"
        rowGap={4}
        justifyContent="space-between"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {characters &&
          characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard character={character} />
          ))}
      </Box>
    </Container>
  );
}

export default MainPage;
