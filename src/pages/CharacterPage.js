import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Container } from '@mui/system';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import Loader from '../components/Loader/Loader';

function CharacterPage() {
  return (
    <Container className="py-container" sx={{ flexGrow: '1' }}>
      <ErrorBoundary
        fallback={<Navigate to="/404" state={{ msg: 'error.dataError' }} />}
      >
        <Suspense fallback={<Loader />}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <CharacterDetails />
          </motion.div>
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}

export default CharacterPage;
