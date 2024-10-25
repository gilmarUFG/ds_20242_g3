import { Home } from '../components/pages/Home/home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
