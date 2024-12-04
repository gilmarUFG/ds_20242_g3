import { AppBar, Box, Button, Grid2, IconButton, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
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
            <Grid2>
              <NavLink to={'/assista-ai'} color={'info'}>
                <Button color="info"> Filmes</Button>
              </NavLink>

              <NavLink to={'/assista-ai/recomendados'}>
                <Button color="info">Recomendados</Button>
              </NavLink>

              <NavLink to={'/avaliacoes'}>
                <Button color="info">Avaliações</Button>
              </NavLink>
            </Grid2>
          </Box>

          <Box justifyContent={'flex-end'} sx={{ gap: 30, width: 'auto' }}>
            <NavLink to={'/login'}>
              <Button color="info">Entrar</Button>
            </NavLink>
            <NavLink to={'/assista-ai/usuario/cadastrar'}>
              <Button
                className={'button'}
                variant={'outlined'}
                sx={{ ml: 2 }}
                color="inherit"
              >
                Cadastrar-se
              </Button>
            </NavLink>

            {/*<IconButton>*/}
            {/*  <AccountCircleIcon fontSize={'large'} sx={{ color: 'white' }} />*/}
            {/*</IconButton>*/}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
