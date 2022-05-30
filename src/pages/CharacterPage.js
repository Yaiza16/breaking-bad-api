import React, { Suspense } from 'react';
import { Container } from '@mui/system';
import { connect } from 'react-redux';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import Loader from '../components/Loader/Loader';
import { motion } from 'framer-motion';

const CharacterPage = ({ character }) => {
  return (
    <Container className="py-container" sx={{ flexGrow: '1' }}>
      <Suspense fallback={<Loader />}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CharacterDetails character={character} />
        </motion.div>
      </Suspense>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  character: state.characters.currentCharacter,
});

export default connect(mapStateToProps)(CharacterPage);
