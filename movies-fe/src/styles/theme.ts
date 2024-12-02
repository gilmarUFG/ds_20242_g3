import { colors } from './colors';
import { fontSizes } from './fontSize';

interface ThemeInterface {
  colors: Record<string, string>;
  fontSizes: Record<string, string>;
}

export const theme: ThemeInterface = {
  colors,
  fontSizes,
};
