import { defaultTheme } from '@/assets/theme/default';
import { MainContainer } from '@/styles/layout.styles';
import { Slot } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';

export default function Layout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <Slot />
      </MainContainer>
    </ThemeProvider>
  );
}
