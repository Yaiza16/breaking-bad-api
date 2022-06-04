import { Card, CardContent } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import {
  CharacterImage,
  CharacterQuote,
  CharacterTabs,
  CharacterTitle,
} from './partials';
import { cardStyles, quoteStyles } from '../../theme/components';
import useRequest from '../../hooks/useRequest';
import { apiGetCharacterByName } from '../../services/api/breakingBadApi';

function CharacterDetails() {
  const { cardCharacter } = cardStyles();
  const { quote } = quoteStyles();
  const { characterName } = useParams();
  const { data: character } = useRequest(
    `${apiGetCharacterByName}${characterName}`
  );
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CharacterTitle name={character[0].name} />
      <div className={quote}>
        <CharacterQuote />
      </div>
      <Box>
        <Card className={cardCharacter}>
          <CharacterImage name={character[0].name} image={character[0].img} />
          <CardContent sx={{ width: '100%', backgroundColor: '#f0f0f075' }}>
            <CharacterTabs character={character[0]} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default CharacterDetails;
