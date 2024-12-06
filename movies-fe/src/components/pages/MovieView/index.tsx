import * as S from '../../molecules/DetailsModal/styles';
import MovieReviewsList from '../../molecules/MovieReviewsList';
import React, { useEffect, useState } from 'react';
import { Grid2, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { colors } from '../../../styles/colors';
import { Link, useParams } from 'react-router-dom';
import { getRatingByMovieId } from '../../../services/moviesService';
import { Film } from '../../molecules/DetailsModal/types';
import { RatingById } from '../../../services/types';

function MovieView() {
  let { id } = useParams();
  const selectedFilm = JSON.parse(
    localStorage.getItem('selectedFilm') || '{}'
  ) as Film;
  const [ratings, setRatings] = useState<RatingById[]>([]);

  useEffect(() => {
    getRatingByMovieId(Number(id)).then((response) => {
      setRatings(response.data);
      localStorage.removeItem('selectedFilm');
    });
  }, [id]);

  return (
    <Grid2>
      <Link to={'/assista-ai'}>
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
