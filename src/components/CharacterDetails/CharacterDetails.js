import { Card, CardContent } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import {
  CharacterImage,
  CharacterQuote,
  CharacterTabs,
  CharacterTitle,
} from './partials';
import useRequest from '../../hooks/useRequest';
import { apiGetCharacterByName } from '../../services/api/breakingBadApi';

function CharacterDetails() {
  const { characterName } = useParams();
  const { data: character } = useRequest(
    `${apiGetCharacterByName}${characterName}`
  );

  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CharacterTitle name={character[0].name} />
      <div className="quote-container">
        <CharacterQuote />
      </div>
      <Box>
        <Card
          sx={{ display: 'flex', maxWidth: '900px', width: '800px' }}
          className="card-detail-character-container"
        >
          <CharacterImage name={character[0].name} image={character[0].img} />
          <CardContent sx={{ width: '100%' }} className="card-detail-character">
            <CharacterTabs character={character[0]} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default CharacterDetails;
