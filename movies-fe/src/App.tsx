import { GlobalStyle } from './styles/global';
import ComponentRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

export function App() {
  interface ThemeInterface {
    colors: Record<string, string>;
    fontSizes: Record<string, string>;
  }

  return (
    <ThemeProvider theme={theme}>
      <ComponentRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
