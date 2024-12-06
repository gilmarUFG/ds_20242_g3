import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#3423d0',
    },
    secondary: {
      main: '#2e143c',
    },
    info: {
      main: '#efeaea',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: '#5e5b5b',
    },
  },
});

export default muiTheme;
