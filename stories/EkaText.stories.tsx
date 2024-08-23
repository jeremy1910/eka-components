import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getTheme } from 'eka-styles';
import { EkaText } from '../src/index';

export default {
  title: 'Eka-Components/EkaText',
  component: EkaText,
} as ComponentMeta<typeof EkaText>;

const Template: ComponentStory<typeof EkaText> = (args) => <EkaText {...args} />;

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
    children: 'Here my text'
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
    children: 'Here my text'
};