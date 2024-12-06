import { Grid2, Pagination } from '@mui/material';
import { FilmCard } from '../../molecules/FilmCard';
import DetailsModal from '../../molecules/DetailsModal';
import { useCallback, useEffect, useState } from 'react';
import { Film } from '../../molecules/DetailsModal/types';
import SearchBox from '../../atomic/SearchBox/SearchBox';
import { getRecommendations } from '../../../services/moviesService';
import { useSearchParams } from 'react-router-dom';
import { movieFormatter } from '../../../utils';

export function Home() {
  const [open, setOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [genre, setGenres] = useState(0);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [films, setFilms] = useState<Film[]>([]);

  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  const searchRecommendations = useCallback(
    async (page = 1) => {
      const response = await getRecommendations(Number(userId), page - 1);
      const temp = movieFormatter(response.data);
      setFilms(temp);
      setTotalPages(response.pagination.totalPages);
      setPage(response.pagination.page + 1);
    },
    [userId]
  );

  useEffect(() => {
    if (userId) {
      searchRecommendations();
    }
  }, [searchRecommendations, userId]);

  const handleClick = (film: Film) => {
    setOpen(true);
    setSelectedFilm(film);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFilm(null);
  };

  return (
    <Grid2 container spacing={6} className="container">
      <h1>Recomendados para você</h1>
      <SearchBox
        genre={genre}
        query={query}
        setQuery={setQuery}
        setGenre={setGenres}
      />

      <Grid2
        container
        spacing={3}
        sx={{ gap: 5, justifyContent: 'center', display: 'flex' }}
      >
        {films.map((film) => (
          <FilmCard src={film.logoUrl} onClick={() => handleClick(film)} />
        ))}
      </Grid2>
      {open && selectedFilm && (
        <DetailsModal onClose={handleClose} film={selectedFilm} open={open} />
      )}

      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => {
          searchRecommendations(value);
        }}
        color={'primary'}
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white',
          },
        }}
      />
    </Grid2>
  );
}

export default Home;
