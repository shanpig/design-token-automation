'use client';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme.json';
import { StyledSubTitle, StyledTitle } from './page.style';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <StyledTitle>Hello design token!</StyledTitle>
        <StyledSubTitle>this is a sub title</StyledSubTitle>
      </main>
    </ThemeProvider>
  );
}
