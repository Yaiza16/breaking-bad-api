import { useContext } from 'react';
import { Typography } from '@mui/material';
import { CharacterContext } from '../CharacterDetails';

function CharacterTitle() {
  const { name } = useContext(CharacterContext);

  return (
    <Typography align="center" variant="h4" marginBottom={2}>
      {name}
    </Typography>
  );
}

export default CharacterTitle;
