import { api } from './api';
import { Movie } from './types';

export const getMovies = async () => {
  const response = await api.get<Movie[]>('/movies');
  return response.data;
};
