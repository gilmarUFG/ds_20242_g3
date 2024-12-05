import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationComponentOptions } from './types';

const PaginationComponent = ({
  totalReviews,
  reviewsPerPage,
  onPageChange,
}: PaginationComponentOptions) => {
  const pageCount = Math.ceil(totalReviews / reviewsPerPage);

  return (
    <Pagination
      count={pageCount}
      onChange={(event, page) => onPageChange(page)}
      color="primary"
      sx={{
        paddingBlock: '20px',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-root': {
          color: 'white',
        },
      }}
    />
  );
};

export default PaginationComponent;
