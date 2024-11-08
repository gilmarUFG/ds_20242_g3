import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function NavBar() {
  return (
    <>
      <AppBar className={'nav-bar'} position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ gap: 10 }}>
            <h1>Assista AI</h1>
          </Box>

          <Box sx={{ gap: 10 }}>
            <Button color="inherit">Filmes</Button>
            <Button color="inherit">Reviews</Button>

            <IconButton>
              <AccountCircleIcon fontSize={'large'} sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
