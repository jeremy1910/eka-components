import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getTheme } from 'eka-styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const themeName = 'base';
const theme = getTheme(themeName);

export const decorators = [
  (Story) => {
    React.useEffect(() => {
      const link = document.createElement('link');
      link.href = "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }, []);
    return <StyledThemeProvider theme={theme}>
      <Story />
    </StyledThemeProvider>
  },
];