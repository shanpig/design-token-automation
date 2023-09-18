'use client';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme.json';
import { StyledTitle } from './page.style';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <StyledTitle>Hello design token!</StyledTitle>
      </main>
    </ThemeProvider>
  );
}
