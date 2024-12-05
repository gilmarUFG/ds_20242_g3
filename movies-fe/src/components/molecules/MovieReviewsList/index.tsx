import React, { useState } from 'react';
import { Button, Container, Grid2 } from '@mui/material';
import PaginationComponent from '../../atomic/PaginationComponent/PaginationComponent';
import AddIcon from '@mui/icons-material/Add';
import ReviewCard from '../ReviewCard';
import AddReviewFormModal from '../ReviewFormModal';

const reviews = [
  {
    id: 1,
    username: 'João',
    rating: 4,
    comment: 'Muito bom, gostei da história.',
  },
  {
    id: 2,
    username: 'Maria',
    rating: 3,
    comment: 'O filme é interessante, mas poderia ser melhor.',
  },
  {
    id: 3,
    username: 'Carlos',
    rating: 5,
    comment: 'Excelente! Muito bem feito.',
  },
  {
    id: 4,
    username: 'Ana',
    rating: 2,
    comment: 'Acho que esperava mais, me decepcionou.',
  },
  // Adicione mais reviews aqui para testar a paginação
];

const reviewsPerPage = 2;

function MovieReviewsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState<boolean>(false);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calcula os reviews a serem exibidos na página atual
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <Container>
      <Grid2
        display={'flex'}
        flex={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ marginTop: 5, paddingInline: 30 }}
      >
        <h2>Reviews Populares</h2>

        <Grid2>
          <Button variant={'contained'} onClick={() => setOpen(true)}>
            <AddIcon /> Adicionar review
          </Button>
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {currentReviews.map((review) => (
          <Grid2 key={review.id}>
            <ReviewCard review={review} />
          </Grid2>
        ))}
      </Grid2>
      <PaginationComponent
        totalReviews={reviews.length}
        reviewsPerPage={reviewsPerPage}
        onPageChange={paginate}
      />

      <AddReviewFormModal open={open} setOpen={setOpen} />
    </Container>
  );
}

export default MovieReviewsList;
