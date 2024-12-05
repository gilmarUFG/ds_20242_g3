import React from 'react';
import { Card, CardContent, Typography, Rating, Grid2 } from '@mui/material';
import styled from 'styled-components';
import { CardContainer, ReviewContent } from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <CardContainer>
      <ReviewContent>
        <Grid2
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Grid2 display={'flex'} alignItems={'center'} sx={{ gap: 2 }}>
            <AccountCircleIcon />
            <Typography variant="h6">{review.username}</Typography>
          </Grid2>

          <Rating name="read-only" value={review.rating} readOnly />
        </Grid2>

        <Typography variant="body2" color="info">
          {review.comment}
        </Typography>
      </ReviewContent>
    </CardContainer>
  );
};

export default ReviewCard;
