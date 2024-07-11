import { DefaultTheme } from 'styled-components/native';

export const defaultTheme: DefaultTheme = {
  colors: {
    background: {
      main: '#da1e2d',
      card: '#E9C46A',
    },
    text: {
      primary: '#333333',
      secondary: '#FFFFFF',
      button: '#E76F51',
    },
    button: {
      background: '#264653',
    },
    border: {
      card: '#2A9D8F',
    },
    status: {
      error: '#E63946',
      warning: '#F4A261',
      info: '#2A9D8F',
      success: '#90BE6D',
    },
    accent: {
      primary: '#FFFFFF',
      secondary: '#F4A261',
      tertiary: '#2A9D8F',
    },
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    extraLarge: '24px',
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px',
    extraLarge: '24px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
};
