import { Card, CardContent } from '@mui/material';

export function FilmCard({ src }: { src: string }) {
  return (
    <Card>
      <CardContent>
        <img width={250} height={300} src={src} />
      </CardContent>
    </Card>
  );
}
