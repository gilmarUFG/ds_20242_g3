export interface PaginationComponentOptions {
  totalReviews: number;
  reviewsPerPage: number;
  onPageChange: (page: number) => void;
}
