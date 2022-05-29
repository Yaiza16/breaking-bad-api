import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterPage from '../pages/CharacterPage';
import MainPage from '../pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/character/:characterId" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
