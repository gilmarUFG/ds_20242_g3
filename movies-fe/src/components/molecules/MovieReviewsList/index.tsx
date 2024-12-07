import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Grid2 } from '@mui/material';
import PaginationComponent from '../../atomic/PaginationComponent/PaginationComponent';
import AddIcon from '@mui/icons-material/Add';
import ReviewCard from '../ReviewCard';
import AddReviewFormModal from '../ReviewFormModal';
import {
  getRatingByMovieId,
  getUserAlreadyRated,
} from '../../../services/moviesService';
import { useParams, useSearchParams } from 'react-router-dom';
import { RatingById } from '../../../services/types';

function MovieReviewsList() {
  const [open, setOpen] = useState<boolean>(false);
  const [userAlreadyReviewed, setUserAlreadyReviewed] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [reviews, setReviews] = useState<RatingById[]>([]);

  const paginate = (pageNumber: number) => getRating(pageNumber);

  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  let { id: movieId } = useParams<{ id: string }>();

  const getRating = useCallback(
    async (page = 1) => {
      getRatingByMovieId(Number(movieId), page - 1).then((response) => {
        console.log(response.data);
        setReviews(response.data);
        setTotalPages(response.pagination.totalPages);
        console.log('chamou');
      });
    },
    [movieId]
  );

  useEffect(() => {
    getRating();
  }, [getRating]);

  useEffect(() => {
    getUserAlreadyRated(Number(movieId), Number(userId)).then((response) => {
      setUserAlreadyReviewed(response);
    });
  });

  return (
    <Container>
      <Grid2
        display={'flex'}
        flex={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ marginBlock: 5, paddingInline: 30 }}
      >
        <h2>Reviews Populares</h2>

        {!userAlreadyReviewed && (
          <Grid2>
            <Button variant={'contained'} onClick={() => setOpen(true)}>
              <AddIcon /> Adicionar review
            </Button>
          </Grid2>
        )}
      </Grid2>

      <Grid2
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {reviews.map((review) => (
          <Grid2 key={review.id}>
            <ReviewCard review={review} />
          </Grid2>
        ))}
      </Grid2>
      <PaginationComponent totalPages={totalPages} onPageChange={paginate} />

      <AddReviewFormModal open={open} setOpen={setOpen} />
    </Container>
  );
}

export default MovieReviewsList;
