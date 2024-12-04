import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import RecommendedList from '../components/pages/RecommendedList';
import MovieView from '../components/pages/MovieView';

export const routes = createBrowserRouter([
  {
    path: 'assista-ai',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'recomendados', element: <RecommendedList /> },
      { path: 'filmes/:id', element: <MovieView /> },
    ],
  },
  { path: 'login', element: <Login /> },
]);
