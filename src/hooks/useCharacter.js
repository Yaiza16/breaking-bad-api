import { useNavigate } from 'react-router-dom';

const useCharacter = (character) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    const name = character.name.replace(/\s+/g, '+');
    navigate(`character/${name}`);
  };
  return { handleOnClick };
};

export default useCharacter;
