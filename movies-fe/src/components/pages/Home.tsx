import { Grid2 } from '@mui/material';
import { FilmCard } from '../atomic/Card';

export function Home() {
  const listFilm = [
    'https://starwars-visualguide.com/assets/img/films/1.jpg',
    'https://starwars-visualguide.com/assets/img/films/2.jpg',
    'https://starwars-visualguide.com/assets/img/films/3.jpg',
  ];
  return (
    <Grid2 container className="container">
      <h1>Filmes</h1>
      <Grid2
        container
        spacing={3}
        sx={{
          padding: 10,
          gap: 5,
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {listFilm.map((item) => (
          <FilmCard src={item} />
        ))}
      </Grid2>
    </Grid2>
  );
}

export default Home;
