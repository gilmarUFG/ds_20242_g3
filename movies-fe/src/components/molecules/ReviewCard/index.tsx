import React from 'react';
import { Typography, Rating, Grid2 } from '@mui/material';
import { CardContainer, ReviewContent } from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { format } from 'date-fns';
import { RatingById } from '../../../services/types';

const ReviewCard = ({ review }: { review: RatingById }) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    return format(date, 'dd/MM/yyyy');
  }
  return (
    <CardContainer>
      <ReviewContent>
        <Grid2
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Grid2 display={'flex'} alignItems={'center'} sx={{ gap: 1 }}>
            <AccountCircleIcon />
            <Typography variant="h6">{review.user.userName}</Typography>
          </Grid2>
          <p>{formatDate(review.date.toString())}</p>
        </Grid2>

        <Rating name="read-only" value={review.rating} readOnly />
        <Typography variant="body2" color="info">
          {review.comment}
        </Typography>
      </ReviewContent>
    </CardContainer>
  );
};

export default ReviewCard;
