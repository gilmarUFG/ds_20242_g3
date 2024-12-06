import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home/Home';
import UserForm from '../components/pages/UserForm/UserForm';
import MovieView from '../components/pages/MovieView';

export const routes = createBrowserRouter([
  {
    path: 'assista-ai',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'filme', element: <MovieView /> },
      { path: 'usuario/cadastrar', element: <UserForm /> },
    ],
  },
  { path: 'login', element: <Login /> },
]);
