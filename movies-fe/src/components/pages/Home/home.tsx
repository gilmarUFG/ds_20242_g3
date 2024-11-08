import { Grid } from '@mui/material';
import { FilmCard } from '../../atomic/Card';

export function Home() {
  const listFilm = [
    'https://starwars-visualguide.com/assets/img/films/1.jpg',
    'https://starwars-visualguide.com/assets/img/films/2.jpg',
    'https://starwars-visualguide.com/assets/img/films/3.jpg',
  ];
  return (
    <Grid container spacing={6} className="container">
      <h1>Home Page</h1>
      <Grid
        container
        spacing={3}
        sx={{ padding: 20, gap: 5, justifyContent: 'center', display: 'flex' }}
      >
        {listFilm.map((item) => (
          <FilmCard src={item} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
