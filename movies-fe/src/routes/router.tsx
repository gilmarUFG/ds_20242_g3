import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';

export const routes = createBrowserRouter([
  {
    path: 'assista-ai',
    element: <Layout />,
    children: [{ path: '', element: <Home /> }],
  },
  { path: 'login', element: <Login /> },
]);
