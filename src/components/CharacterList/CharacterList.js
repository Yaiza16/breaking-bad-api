import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import CharacterCard from '../CharacterCard/CharacterCard';

function CharacterList() {
  const [t] = useTranslation('global');
  const { list: characters } = useSelector((state) => state.character);
  return characters.length > 0 ? (
    characters.map((character) => (
      <CharacterCard key={character.char_id} character={character} />
    ))
  ) : (
    <Typography variant="subtitle1">{t('error.notData')}</Typography>
  );
}

export default CharacterList;
