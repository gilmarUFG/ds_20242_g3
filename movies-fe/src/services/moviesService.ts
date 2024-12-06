import { api } from './api';
import { Response, Movie, Rating, RatingById, Genre } from './types';

export const getMovies = async () => {
  const response = await api.get<Response<Movie[]>>('/movies');
  return response.data;
};

export const getRatings = async (page: number) => {
  const response = await api.get<Response<Rating[]>>('/ratings', {
    params: {
      page,
    },
  });
  return response.data;
};

export const getRating = async (id: string) => {
  const response = await api.get<Response<RatingById[]>>(`/ratings/${id}`);
  return response.data;
};

export const getRatingByMovieId = async (movieId: number) => {
  const response = await api.get<Response<RatingById[]>>(
    `/ratings/movie/${movieId}`
  );
  return response.data;
};

export const getRecommendations = async (userId: number, page: number) => {
  const response = await api.get<Response<Movie[]>>(
    `/recommendations/genre/${userId}`,
    {
      params: {
        page,
      },
    }
  );
  return response.data;
};

export const searchMovies = async (query: string) => {
  const response = await api.get<Response<Movie[]>>(
    `/recommendations/key/${query}`
  );
  return response.data;
};

export const getGenres = async () => {
  const response = await api.get<Response<Genre[]>>('/genres', {
    params: {
      pageSize: 20,
    },
  });
  return response.data;
};
