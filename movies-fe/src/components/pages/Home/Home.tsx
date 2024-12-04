import { Grid } from '@mui/material';
import { FilmCard } from '../../molecules/FilmCard';
import DetailsModal from '../../molecules/DetailsModal';
import { useState } from 'react';
import { Film } from '../../molecules/DetailsModal/types';

export function Home() {
  const [open, setOpen] = useState(false);
  const [film, setFilm] = useState<Film | null>(null);

  // const listFilm = [
  //   'https://starwars-visualguide.com/assets/img/films/1.jpg',
  //   'https://starwars-visualguide.com/assets/img/films/2.jpg',
  //   'https://starwars-visualguide.com/assets/img/films/3.jpg',
  // ];

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

  return (
    <Grid container spacing={6} className="container">
      <h1>Home Page</h1>
      <Grid
        container
        spacing={3}
        sx={{ padding: 20, gap: 5, justifyContent: 'center', display: 'flex' }}
      >
        {mockedData.map((item) => (
          <FilmCard src={item.logoUrl} onClick={() => handleClick(item)} />
        ))}
      </Grid>
      {open && film && (
        <DetailsModal onClose={handleClose} film={film} open={open} />
      )}
    </Grid>
  );
}

export default Home;
