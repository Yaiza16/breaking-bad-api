import React from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Typography } from '@mui/material';

const CharacterQuote = ({ quote, handleClick }) => {
  return (
    <>
      <Typography variant="overline" component="h4" textAlign="center">
        {quote === undefined
          ? 'No quotes from this author have been found'
          : quote.quote}
      </Typography>

      {quote !== undefined && (
        <Button
          variant="outlined"
          startIcon={<RestartAltIcon />}
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default CharacterQuote;
