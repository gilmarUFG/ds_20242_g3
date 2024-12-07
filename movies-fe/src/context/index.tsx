import { createContext, useContext, useState } from 'react';
import { MoviesContextData, MoviesProviderProps } from './types';
import { Film } from '../components/molecules/DetailsModal/types';

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  return (
    <MoviesContext.Provider
      value={{
        selectedFilm,
        setSelectedFilm,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};
