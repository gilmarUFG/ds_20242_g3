import { Film } from '../components/molecules/DetailsModal/types';
import { Movie } from '../services/types';

export const movieFormatter = (movies: Movie[]): Film[] => {
  return movies.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.overview,
    classification: '18+',
    type: 'Filme',
    categories: item.genres.map((genre) => genre.name),
    releaseYear: item.releaseDate.split('-')[0],
    logoUrl: `http://image.tmdb.org/t/p/w342${item.posterPath}`,
  }));
};
