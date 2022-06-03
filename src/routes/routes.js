import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharacterPage from '../pages/CharacterPage';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';

function Router() {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character/:characterName" element={<CharacterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Router;
