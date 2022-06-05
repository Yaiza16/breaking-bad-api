import { quoteStyles } from '../../../theme/components';
import { CharacterQuote, CharacterTitle } from '../partials';

function CharacterDetailsHeader() {
  const { quote } = quoteStyles();

  return (
    <>
      <CharacterTitle />
      <div className={quote}>
        <CharacterQuote />
      </div>
    </>
  );
}

export default CharacterDetailsHeader;
