import styled from 'styled-components';
import { Button, DialogContent, Grid2, TextField } from '@mui/material';
import Rating from '@mui/material/Rating';

export const DialogContainer = styled(DialogContent)`
    background-color: rgb(22, 18, 57);
);
`;
export const StyledDialogTitle = styled(Grid2)`
  background-color: var(--dark);
  );
`;

export const StyledTextField = styled(TextField)`
  margin-top: 16px;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
  color: white;
  &:hover {
    background-color: var(--purple);
  }
`;
