import { api } from './api';
import { Response, Movie, Rating, RatingById, Genre } from './types';

export const searchMovies = async (
  page: number,
  genreId?: number,
  title?: string
) => {
  const response = await api.get<Response<Movie[]>>('/movies', {
    params: {
      page,
      genreId,
      title,
    },
  });
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

export const getRatingByMovieId = async (movieId: number, page: number) => {
  const response = await api.get<Response<RatingById[]>>(
    `/ratings/movie/${movieId}`,
    {
      params: {
        page,
        size: 4,
      },
    }
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

export const getGenres = async () => {
  const response = await api.get<Response<Genre[]>>('/genres', {
    params: {
      pageSize: 20,
    },
  });
  return response.data;
};

export const postRating = async (
  movieId: number,
  userId: number,
  rating: number,
  comment: string
) => {
  await api.post('/ratings', {
    movieId,
    userId,
    rating,
    comment,
  });

  return;
};

export const getUserAlreadyRated = async (movieId: number, userId: number) => {
  const response = await api.get<boolean>(
    `/ratings/user/${userId}/movie/${movieId}`
  );
  return response.data;
};
