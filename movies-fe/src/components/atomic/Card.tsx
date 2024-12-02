import { Card, CardContent, Grid2, useTheme } from '@mui/material';
import '../../styles/components/card.css';

export function FilmCard({ src }: { src: string }) {
  const theme = useTheme();

  return (
    <Card>
      <CardContent className="movie-card">
        <img width={250} height={300} src={src} />
      </CardContent>
    </Card>
  );
}
