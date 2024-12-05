import { AppBar, Box, Button, Grid2, IconButton, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import Logo from '../atomic/Logo';
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
          <Box sx={{ gap: 10, display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Box>

          <Box justifyContent={'flex-end'} sx={{ gap: 30, width: 'auto' }}>
            <IconButton>
              <AccountCircleIcon fontSize={'large'} sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
