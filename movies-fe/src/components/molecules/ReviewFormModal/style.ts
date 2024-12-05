import styled from 'styled-components';
import { Button, DialogContent, Grid2, TextField } from '@mui/material';

export const DialogContainer = styled(DialogContent)`
    background: linear-gradient(135deg, #31213e,#191249,  #070325) !important;

);
`;
export const StyledDialogTitle = styled(Grid2)`
    background: linear-gradient(135deg, #31213e,#191249,  #070325) !important;
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
