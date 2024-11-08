import { createTheme } from '@mui/material';
import { blue, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
      dark: blue[900],
      light: blue[500],
    },
    secondary: {
      main: blue[900],
    },
  },
});
