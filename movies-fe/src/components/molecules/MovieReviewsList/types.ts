export interface Review {
  id?: number;
  comment: string;
  movieId?: number;
  date: Date | string;
  rating: number;
  user: User;
}

export interface User {
  id?: number;
  username: string;
}
