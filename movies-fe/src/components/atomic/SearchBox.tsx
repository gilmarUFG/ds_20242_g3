import { Button, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBox() {
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
        color={'info'}
        value={'Gêneros'}
        placeholder={'Gêneros'}
      >
        <MenuItem value={1}>TESTE 1</MenuItem>
      </Select>

      <TextField
        size={'small'}
        sx={{ background: 'white', borderRadius: 2, width: '30%' }}
      ></TextField>
      <Button variant={'contained'}>
        <SearchIcon />
      </Button>
    </div>
  );
}

export default SearchBox;
