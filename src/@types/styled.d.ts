import { defaultTheme } from '@/assets/theme/default';
import 'styled-components/native';
type CustomTheme = typeof defaultTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {
    colors: {
      background: {
        main: string;
        card: string;
      };
      text: {
        primary: string;
        secondary: string;
        button: string;
      };
      button: {
        background: string;
      };
      border: {
        card: string;
      };
      status: {
        error: string;
        warning: string;
        info: string;
        success: string;
      };
      accent: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
