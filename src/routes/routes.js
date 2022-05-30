import { Route, Routes } from 'react-router-dom';
import CharacterPage from '../pages/CharacterPage';
import MainPage from '../pages/MainPage';

const Router = () => {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/character/:characterName" element={<CharacterPage />} />
      </Routes>
    </div>
  );
};

export default Router;
