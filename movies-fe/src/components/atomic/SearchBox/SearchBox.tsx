import { Button, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBoxProps } from './types';

function SearchBox({ genre, setGenre, setQuery, query }: SearchBoxProps) {
  const mockGnere = [
    { id: 9, name: 'action' },
    { id: 10, name: 'romance' },
  ];

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
        sx={{ width: 150, background: 'white' }}
        size={'small'}
        value={genre}
        placeholder={'Gêneros'}
        onChange={(event) => setGenre(event.target.value)}
      >
        <MenuItem value="">
          <em>--</em>
        </MenuItem>
        {mockGnere.map((item) => (
          <MenuItem color={'text.secondary'} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>

      <TextField
        size={'small'}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ background: 'white', borderRadius: 2, width: '30%' }}
      ></TextField>
      <Button variant={'contained'}>
        <SearchIcon />
      </Button>
    </div>
  );
}

export default SearchBox;
