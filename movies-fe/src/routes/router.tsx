import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import Login from '../components/pages/Login';
import RecommendedList from '../components/pages/RecommendedList';
import MovieView from '../components/pages/MovieView';
import Home from '../components/pages/Home/Home';
import UserForm from '../components/pages/UserForm/UserForm';

export const routes = createBrowserRouter([
  {
    path: 'assista-ai',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'recomendados', element: <RecommendedList /> },
      { path: 'filmes/:id', element: <MovieView /> },
      { path: 'usuario/cadastrar', element: <UserForm /> },
    ],
  },
  { path: 'login', element: <Login /> },
]);
