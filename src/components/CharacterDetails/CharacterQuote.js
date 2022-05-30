import React from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Typography } from '@mui/material';
import { useRequest } from '../../hooks/useRequest';
import { apiGetQuoteByCharacterName } from '../../services/api';
import { useParams } from 'react-router-dom';

const CharacterQuote = () => {
  let { characterName } = useParams();
  console.log(characterName);
  const { data: quote } = useRequest(
    `${apiGetQuoteByCharacterName}${characterName}`
  );
  return (
    <>
      <Typography variant="overline" component="h4" textAlign="center">
        {quote[0] === undefined
          ? 'No quotes from this author have been found'
          : quote[0].quote}
      </Typography>

      {quote[0] !== undefined && (
        <Button variant="outlined" startIcon={<RestartAltIcon />} />
      )}
    </>
  );
};

export default CharacterQuote;
