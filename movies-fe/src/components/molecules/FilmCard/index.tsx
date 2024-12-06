import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import { FilmCardProps } from './types';

export function FilmCard({ film, onClick }: FilmCardProps) {
  const onReviewClick = () => {
    localStorage.setItem('selectedFilm', JSON.stringify(film));
  };

  return (
    <Grid2>
      <CardContent onClick={() => onClick(film)}>
        <img
          style={{ objectFit: 'cover', borderRadius: '5%', cursor: 'pointer' }}
          width={250}
          height={300}
          src={film.logoUrl}
          alt="film"
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/assista-ai/filme/' + film.id}>
          <Button
            variant={'outlined'}
            color={'info'}
            onClick={() => onReviewClick()}
          >
            Ver reviews
          </Button>
        </Link>
      </CardActions>
    </Grid2>
  );
}
