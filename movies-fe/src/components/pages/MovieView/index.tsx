import * as S from '../../molecules/DetailsModal/styles';
import MovieReviewsList from '../../molecules/MovieReviewsList';
import React from 'react';
import { oneMovie } from '../../../mocks/mocks';
import { Grid2, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { colors } from '../../../styles/colors';
import { Link } from 'react-router-dom';

function MovieView() {
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
          <img src={oneMovie.posterPath} width={180} />

          <Grid2>
            <S.Title>{oneMovie.title}</S.Title>
            <S.Info>
              {oneMovie.genres.map((genre) => (
                <>
                  {' '}
                  • <span>{genre.name}</span>
                </>
              ))}
            </S.Info>
            <S.Description>{oneMovie.overview}</S.Description>
          </Grid2>
        </Grid2>
      </S.Content>

      <MovieReviewsList />
    </Grid2>
  );
}

export default MovieView;
