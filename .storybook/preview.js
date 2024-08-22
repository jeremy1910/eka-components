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
  (Story) => (
    <StyledThemeProvider theme={theme}>
      <Story />
    </StyledThemeProvider>
  ),
];