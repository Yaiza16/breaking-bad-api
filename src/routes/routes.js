import { Navigate, Route, Routes } from 'react-router-dom';
import { CharacterPage, ErrorPage, MainPage } from '../pages';
import styles from '../theme/elements/layoutStyles';

function Router() {
  const { routes } = styles();
  return (
    <div className={routes}>
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
