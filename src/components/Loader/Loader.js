import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from '../../assets/images/Walter-White-Breaking-Bad.png';
import { loaderStyles } from '../../theme/components';

function Loader() {
  const { loaderMain } = loaderStyles();
  return (
    <Box className={loaderMain}>
      <motion.img
        src={Image}
        alt="loader-bb"
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, duration: 0.5, repeatType: 'reverse' }}
      />
    </Box>
  );
}

export default Loader;
