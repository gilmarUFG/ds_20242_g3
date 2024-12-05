import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import { FilmCardProps } from './types';

export function FilmCard({ src, onClick }: FilmCardProps) {
  return (
    <Grid2>
      <CardContent onClick={onClick}>
        <img
          style={{ objectFit: 'cover', borderRadius: '5%', cursor: 'pointer' }}
          width={250}
          height={300}
          src={src}
          alt="film"
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/assista-ai/filme'}>
          <Button variant={'outlined'} color={'info'}>
            Ver reviews
          </Button>
        </Link>
      </CardActions>
    </Grid2>
  );
}
