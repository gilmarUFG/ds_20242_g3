import { Home } from '../components/pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/templates/NavBar';

const ComponentRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default ComponentRoutes;
