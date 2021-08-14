import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/UI/GlobalStyles';
import { ThemeLight } from '../src/theme';
import AppHead from '../src/core/AppHead';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(ThemeLight);

  return (
    <>
      <AppHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}
