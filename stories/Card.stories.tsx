import React, { Children } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getTheme } from 'eka-styles';
import { ThemeName } from 'eka-styles';
import { EkaCard, EkaText } from '../src/index';

export default {
  title: 'Eka-Components/Card',
  component: EkaCard,
} as ComponentMeta<typeof EkaCard>;

const Template: ComponentStory<typeof EkaCard> = (args) => <EkaCard {...args} />;

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
    children: <div><EkaText>My card</EkaText> <EkaText>dnqsjndjknqskdnq</EkaText></div>
};

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [
  (Story) => {
    document.body.className = `dark-theme`;

    return <StyledThemeProvider theme={getTheme('dark')}>
      <Story />
    </StyledThemeProvider>
  }
];

DarkTheme.args = {
    children: <div><EkaText>My card</EkaText> <EkaText>dnqsjndjknqskdnq</EkaText></div>
};