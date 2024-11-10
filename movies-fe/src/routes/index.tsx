import { Home } from '../components/pages/Home/home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/layout/NavBar';

const ComponentRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default ComponentRoutes;
