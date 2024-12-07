export interface SearchBoxProps {
  setQuery: (value?: any) => void;
  genre: number | undefined;
  setGenre: (value?: any) => void;
  handleSearch: () => void;
}
