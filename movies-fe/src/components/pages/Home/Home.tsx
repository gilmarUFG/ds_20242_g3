import { Grid2, Pagination } from '@mui/material';
import { FilmCard } from '../../molecules/FilmCard';
import DetailsModal from '../../molecules/DetailsModal';
import { useState } from 'react';
import { Film } from '../../molecules/DetailsModal/types';
import SearchBox from '../../atomic/SearchBox/SearchBox';

export function Home() {
  const [open, setOpen] = useState(false);
  const [film, setFilm] = useState<Film | null>(null);
  const [genre, setGenres] = useState(0);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const mockedData = [
    {
      'title': 'Breaking Bad',
      'description':
        "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future in this intense drama series.",
      'classification': '18+',
      'type': 'Série',
      'categories': ['Crime', 'Drama', 'Thriller'],
      'releaseYear': '2008',
      'logoUrl': 'https://images7.alphacoders.com/617/617964.jpg',
    },
    {
      'title': 'Lost',
      'description':
        'Survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.',
      'classification': '13+',
      'type': 'Série',
      'categories': ['Adventure', 'Drama', 'Mystery'],
      'releaseYear': '2004',
      'logoUrl':
        'https://preview.redd.it/5jrav5nh0c171.png?width=1080&crop=smart&auto=webp&s=cb6b643bf0ea03c87adc561f55a439ed17a0270e',
    },
    {
      'title': 'Game of Thrones',
      'description':
        'Nine noble families wage war against each other to gain control over the mythical land of Westeros, while an ancient enemy returns after being dormant for millennia.',
      'classification': '18+',
      'type': 'Série',
      'categories': ['Adventure', 'Drama', 'Fantasy'],
      'releaseYear': '2011',
      'logoUrl':
        'https://img.elo7.com.br/product/zoom/3A2377D/poster-adesivo-decorativo-game-of-thrones-a-serie-42-5x60cm-poster.jpg',
    },
  ];

  const handleClick = (film: Film) => {
    setOpen(true);
    setFilm(film);
  };

  const handleClose = () => {
    setOpen(false);
    setFilm(null);
  };

  const [response, setResponse] = useState<any>(null);

  const test = () => {
    console.log(5);
  };

  const handleClickTest = async () => {
    console.log('click');
    const response = await getMovies();
    console.log(response);
    setResponse(response);
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
        {mockedData.map((item) => (
          <FilmCard src={item.logoUrl} onClick={() => handleClick(item)} />
        ))}
      </Grid2>
      {open && film && (
        <DetailsModal onClose={handleClose} film={film} open={open} />
      )}

      <Pagination
        count={mockedData.length / 2}
        page={page}
        onChange={(event, value) => {
          setPage(value);
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
