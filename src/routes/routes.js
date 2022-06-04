import { Navigate, Route, Routes } from 'react-router-dom';
import { CharacterPage, ErrorPage, MainPage } from '../pages';

function Router() {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character/:characterName" element={<CharacterPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route
          path="*"
          element={<Navigate replace to="/404" state={{ msg: 'error.msg' }} />}
        />
      </Routes>
    </div>
  );
}

export default Router;
