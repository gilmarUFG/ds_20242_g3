import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, Rating, Typography } from '@mui/material';
import {
  DialogContainer,
  StyledDialogTitle,
  StyledTextField,
  SubmitButton,
} from './style';
import { ReviewFormModalProps } from './types';

const AddReviewFormModal = ({ open, setOpen }: ReviewFormModalProps) => {
  const [rating, setRating] = useState<number | null>(1);
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === null || comment.trim() === '') {
      setError('Por favor, forneça uma avaliação e um comentário.');
      return;
    }

    if (comment.length > 2000) {
      setError('O comentário deve ter no máximo 2000 caracteres.');
      return;
    }

    setError('');
    console.log('Comentário:', comment);
    console.log('Avaliação:', rating);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <StyledDialogTitle
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <DialogTitle>Adicionar Avaliação</DialogTitle>
        <Button onClick={handleClose}>X</Button>
      </StyledDialogTitle>

      <DialogContainer sx={{ marginTop: 0 }}>
        <form onSubmit={handleSubmit}>
          <Rating
            name="rating"
            value={rating}
            onChange={(value, newValue) => setRating(newValue)}
          />
          <StyledTextField
            placeholder="Comentário"
            multiline
            rows={4}
            color={'info'}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            inputProps={{ maxLength: 2000 }}
            helperText={`${comment.length}/2000`}
          />
          {error && <Typography color="error">{error}</Typography>}
          <SubmitButton type="submit" fullWidth variant={'contained'}>
            Enviar Avaliação
          </SubmitButton>
        </form>
      </DialogContainer>
    </Dialog>
  );
};

export default AddReviewFormModal;