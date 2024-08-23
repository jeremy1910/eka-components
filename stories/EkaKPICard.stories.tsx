import React, { Children } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getTheme } from 'eka-styles';
import { EkaKPICard } from '../src/index';

export default {
  title: 'Eka-Components/EkaKPICard',
  component: EkaKPICard,
} as ComponentMeta<typeof EkaKPICard>;

const Template: ComponentStory<typeof EkaKPICard> = (args) => <EkaKPICard {...args} />;

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
    title: 'Applications',
    kpi: 7
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
    title: 'Applications',
    kpi: 7
};