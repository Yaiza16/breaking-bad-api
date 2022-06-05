import PropTypes from 'prop-types';
import { Card } from '@mui/material';
import { Box } from '@mui/system';
import { cardStyles } from '../../../theme/components';

function CharacterDetailsInfo({ children }) {
  const { cardCharacter } = cardStyles();

  return (
    <Box>
      <Card className={cardCharacter}>{children}</Card>
    </Box>
  );
}

CharacterDetailsInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CharacterDetailsInfo;
