import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationComponentOptions } from './types';

const PaginationComponent = ({
  totalPages,
  onPageChange,
}: PaginationComponentOptions) => {
  return (
    <Pagination
      count={totalPages}
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
