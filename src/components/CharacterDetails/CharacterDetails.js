import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import { createContext } from 'react';
import useRequest from '../../hooks/useRequest';
import { apiGetCharacterByName } from '../../services/api/breakingBadApi';
import CharacterDetailsHeader from './CharacterDetailsHeader/CharacterDetailsHeader';
import CharacterDetailsInfo from './CharacterDetailsInfo/CharacterDetailsInfo';
import { CharacterImage, CharacterTabs } from './partials';

export const CharacterContext = createContext({});
const { Provider } = CharacterContext;

function CharacterDetails() {
  const { characterName } = useParams();
  const { data: character } = useRequest(
    `${apiGetCharacterByName}${characterName}`
  );
  return (
    <Provider value={character[0]}>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <CharacterDetailsHeader />
        <CharacterDetailsInfo>
          <CharacterImage />
          <CharacterTabs />
        </CharacterDetailsInfo>
      </Container>
    </Provider>
  );
}

export default CharacterDetails;
