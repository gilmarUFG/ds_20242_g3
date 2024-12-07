import { Film } from '../DetailsModal/types';

export interface FilmCardProps {
  film: Film;
  onClick: (film: Film) => void;
}
