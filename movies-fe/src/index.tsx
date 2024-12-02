import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { routes } from './routes/router';
import muiTheme from './styles/theme-mui';
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MUIThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={routes} />
      </StyledThemeProvider>
    </MUIThemeProvider>
  </React.StrictMode>
);
