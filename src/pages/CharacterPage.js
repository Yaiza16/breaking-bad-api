import React, { Suspense } from 'react';
import { Container } from '@mui/system';
import { motion } from 'framer-motion';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import Loader from '../components/Loader/Loader';

function CharacterPage() {
  return (
    <Container className="py-container" sx={{ flexGrow: '1' }}>
      <Suspense fallback={<Loader />}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CharacterDetails />
        </motion.div>
      </Suspense>
    </Container>
  );
}

export default CharacterPage;
