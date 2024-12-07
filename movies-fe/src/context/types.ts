import React, { ReactNode } from 'react';
import { Film } from '../components/molecules/DetailsModal/types';

export interface MoviesProviderProps {
  children: ReactNode;
}

export interface MoviesContextData {
  selectedFilm: Film | null;
  setSelectedFilm: React.Dispatch<React.SetStateAction<Film | null>>;
}
