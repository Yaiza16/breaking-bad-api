import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../../actions/characters';
import CharacterImage from './CharacterImage';
import CharacterTabs from './CharacterTabs';
import CharacterTitle from './CharacterTitle';
import CharacterQuote from './CharacterQuote';

const CharacterDetails = ({ character, quote, statusQuote, getQuote }) => {
  const { error, loading } = statusQuote;
  useEffect(() => {
    getQuote(character.name);
  }, []);

  const getNewQuote = () => getQuote(character.name);

  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CharacterTitle name={character.name} />
      <div className="quote-container">
        {!loading && quote && (
          <CharacterQuote
            quote={quote[0]}
            handleClick={(handleOnClick) => getNewQuote(handleOnClick)}
          />
        )}
      </div>
      <Box>
        <Card
          sx={{ display: 'flex', maxWidth: '900px', width: '800px' }}
          className="card-detail-character-container"
        >
          <CharacterImage name={character.name} image={character.img} />
          <CardContent sx={{ width: '100%' }} className="card-detail-character">
            <CharacterTabs character={character} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  quote: state.characters.quote,
  statusQuote: state.characters,
});

export default connect(mapStateToProps, { getQuote })(CharacterDetails);
