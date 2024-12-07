export interface Response<T> {
  status: number;
  message: string;
  timestamp: number;
  data: T;
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  firstPage: boolean;
  lastPage: boolean;
  emptyPage: boolean;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  genres: Genre[];
  posterPath: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Rating {
  id: number;
  movieId: number;
  rating: number;
  comment: string;
  date: string;
}

export interface RatingById extends Rating {
  user: {
    userId: number;
    userName: string;
  };
}
