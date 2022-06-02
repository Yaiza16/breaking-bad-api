import React from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import useRequest from '../../hooks/useRequest';
import { apiGetQuoteByCharacterName } from '../../services/api';

function CharacterQuote() {
  const { characterName } = useParams();
  const {
    data: quote,
    mutate,
    isValidating,
  } = useRequest(`${apiGetQuoteByCharacterName}${characterName}`);
  const handleOnClick = () => {
    mutate();
  };
  return (
    <>
      <Typography variant="overline" component="h4" textAlign="center">
        {quote[0] === undefined
          ? 'No quotes from this author have been found'
          : quote[0].quote}
      </Typography>

      {quote[0] !== undefined &&
        (isValidating ? (
          <LoadingButton
            loading
            variant="text"
            style={{ color: 'black', height: '20px' }}
            className="loading-button-spinner"
          />
        ) : (
          <Button startIcon={<RestartAltIcon />} onClick={handleOnClick} />
        ))}
    </>
  );
}

export default CharacterQuote;
