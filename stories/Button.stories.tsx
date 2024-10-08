import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getTheme } from 'eka-styles';
import { ThemeName } from 'eka-styles';
import { Button } from '../src/index';

export default {
  title: 'Eka-Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BaseTheme = Template.bind({});
BaseTheme.decorators = [
  (Story) => {
    document.body.className = `base-theme`;
    return <StyledThemeProvider theme={getTheme('base')}>
      <Story />
    </StyledThemeProvider>
  },
];

BaseTheme.args = {
  label: 'Button',
};

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [
  (Story) => {
    document.body.className = `dark-theme`;
    return <StyledThemeProvider theme={getTheme('dark')}>
      <Story />
    </StyledThemeProvider>
  },
];

DarkTheme.args = {
  label: 'Button',
};