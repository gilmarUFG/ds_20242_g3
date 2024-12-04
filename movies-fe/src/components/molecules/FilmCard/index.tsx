import { Card, CardContent } from '@mui/material';
import { FilmCardProps } from './types';

export function FilmCard({ src, onClick }: FilmCardProps) {
  return (
    <Card onClick={onClick}>
      <CardContent>
        <img width={250} height={300} src={src} alt="film" />
      </CardContent>
    </Card>
  );
}
