import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  TextField,
} from '@mui/material';
import Logo from '../atomic/Logo';

function Login() {
  return (
    <Grid2 container className="login-container">
      <Card
        className={'card-login'}
        sx={{
          boxShadow: 10,
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}
        >
          <Logo />

          <Grid2 sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              color={'info'}
              placeholder={'Email'}
              size={'small'}
              sx={{ background: 'white', width: '100%', borderRadius: 2 }}
            ></TextField>

            <TextField
              color={'info'}
              placeholder={'Senha'}
              size={'small'}
              sx={{ background: 'white', width: '100%', borderRadius: 2 }}
            ></TextField>
          </Grid2>

          <CardActions>
            <Button fullWidth variant={'contained'}>
              Entrar
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid2>
  );
}

export default Login;
