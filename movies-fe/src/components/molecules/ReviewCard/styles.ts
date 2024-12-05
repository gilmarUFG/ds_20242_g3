import styled from 'styled-components';
import { CardContent, Grid2 } from '@mui/material';

export const CardContainer = styled(Grid2)`
  min-width: 700px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

export const ReviewContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
