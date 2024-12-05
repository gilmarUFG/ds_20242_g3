export interface ReviewFormModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  userId?: number;
  movieId?: number;
}
