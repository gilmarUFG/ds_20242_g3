import Modal from '@mui/material/Modal';
import React, { useState } from 'react';

import * as S from './styles';
import { DetailsModalProps } from './types';

const DetailsModal = ({ open, onClose, film }: DetailsModalProps) => {
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal'
  );

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    const newOrientation =
      naturalWidth > naturalHeight ? 'horizontal' : 'vertical';
    setOrientation(newOrientation);
  };

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <S.OverlayContainer orientation={orientation}>
          <img
            src={film.logoUrl}
            alt="background"
            onLoad={handleImageLoad}
            style={{ display: 'none' }}
          />

          <S.BackgroundImage src={film.logoUrl} />
          <S.Content>
            <S.Logo>
              Assista <span>AI</span>
            </S.Logo>
            <S.Title>{film.title}</S.Title>
            <S.Info>
              <span>{film.releaseYear}</span> •{' '}
              <span>{film.classification}</span> • <span>{film.type}</span>
              {film.categories.map((category) => (
                <>
                  {' '}
                  • <span>{category}</span>
                </>
              ))}
            </S.Info>
            <S.Description>{film.description}</S.Description>
            <S.CloseButton onClick={onClose}>✕</S.CloseButton>
          </S.Content>
        </S.OverlayContainer>
      </Modal>
    </>
  );
};

export default DetailsModal;
