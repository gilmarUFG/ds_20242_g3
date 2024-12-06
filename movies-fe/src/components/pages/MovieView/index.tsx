import * as S from '../../molecules/DetailsModal/styles';
import MovieReviewsList from '../../molecules/MovieReviewsList';
import React, { useEffect, useState } from 'react';
import { Grid2, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getRatingByMovieId } from '../../../services/moviesService';
import { Film } from '../../molecules/DetailsModal/types';
import { RatingById } from '../../../services/types';

function MovieView() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  let { id } = useParams();
  const [selectedFilm, setSelectedFilm] = useState<Film>();
  const [ratings, setRatings] = useState<RatingById[]>([]);

  useEffect(() => {
    getRatingByMovieId(Number(id)).then((response) => {
      setRatings(response.data);
      setSelectedFilm(JSON.parse(localStorage.getItem('selectedFilm') || '{}'));
    });
  }, [id]);

  if (selectedFilm === undefined) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Grid2>
      <Link to={`/assista-ai?userId=${userId}`}>
        <IconButton
          color="primary"
          sx={{ marginLeft: 5, backgroundColor: 'white' }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <S.Content style={{ marginTop: -88, borderRadius: 0 }}>
        <Grid2
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ gap: 10 }}
        >
          <img
            src={selectedFilm.logoUrl}
            width={180}
            alt={selectedFilm.title}
          />

          <Grid2>
            <S.Title>{selectedFilm.title}</S.Title>
            <S.Info>
              {selectedFilm.categories.map((genre) => (
                <>
                  {' '}
                  • <span>{genre}</span>
                </>
              ))}
            </S.Info>
            <S.Description>{selectedFilm.description}</S.Description>
          </Grid2>
        </Grid2>
      </S.Content>

      <MovieReviewsList reviews={ratings} />
    </Grid2>
  );
}

export default MovieView;
