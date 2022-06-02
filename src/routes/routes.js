import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharacterPage from '../pages/CharacterPage';
import MainPage from '../pages/MainPage';

function Router() {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character/:characterName" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default Router;
