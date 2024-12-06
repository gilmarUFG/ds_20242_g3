export interface SearchBoxProps {
  query: string;
  setQuery: (value?: any) => void;
  genre: number | undefined;
  setGenre: (value?: any) => void;
  handleSearch: () => void;
}
