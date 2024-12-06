import { Button, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBoxProps } from './types';
import { useEffect, useState } from 'react';
import { getGenres } from '../../../services/moviesService';
import { Genre } from '../../../services/types';

function SearchBox({
  query,
  setQuery,
  genre,
  setGenre,
  handleSearch,
}: SearchBoxProps) {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    getGenres().then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div
      style={{
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        gap: 10,
        marginTop: 10,
      }}
    >
      <Select
        sx={{ width: 150, background: 'white', color: 'black' }}
        size={'small'}
        value={genre}
        placeholder={'Gêneros'}
        onChange={(event) => setGenre(event.target.value)}
      >
        <MenuItem value="">
          <em>--</em>
        </MenuItem>
        {genres.map((item) => (
          <MenuItem sx={{ color: 'black' }} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>

      <TextField
        size={'small'}
        slotProps={{
          htmlInput: {
            style: { color: 'black' }, // Defina a cor desejada
          },
        }}
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          background: 'white',
          borderRadius: 2,
          width: '30%',
          color: 'black',
        }}
      ></TextField>
      <Button variant={'contained'} onClick={() => handleSearch()}>
        <SearchIcon />
      </Button>
    </div>
  );
}

export default SearchBox;
