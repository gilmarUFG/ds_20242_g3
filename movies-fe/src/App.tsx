import { GlobalStyle } from './styles/global';
import ComponentRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { NavBar } from './components/templates/NavBar';
import { fontSizes } from './styles/fontSize';
import { colors } from './styles/colors';

export function App() {
  interface ThemeInterface {
    colors: Record<string, string>;
    fontSizes: Record<string, string>;
  }

  const theme: ThemeInterface = {
    colors,
    fontSizes,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <ComponentRoutes />
    </ThemeProvider>
  );
}

export default App;
