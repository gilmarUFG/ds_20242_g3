export interface DetailsModalProps {
  film: Film | null;
  onClose: () => void;
  open: boolean;
}

export interface Film {
  id: number;
  title: string;
  description: string;
  classification: string;
  type: string;
  categories: string[];
  releaseYear: string;
  logoUrl: string;
}
