import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getTheme } from 'eka-styles';
import { EkaKPITop } from '../src/components/EkaKPICards/EkaKPITop';

export default {
  title: 'Eka-Components/EkaKPITop',
  component: EkaKPITop,
} as ComponentMeta<typeof EkaKPITop>;

const Template: ComponentStory<typeof EkaKPITop> = (args) => <EkaKPITop {...args} />;

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
    title: 'Top 3 incidents in progress',
    kpis: [
        {
        name: 'Public Access - Home Client',
        time: 20000
    },
    {
        name: 'Public Access - Connfigurator',
        time: 20000
    },
    {
        name: 'Backend - Initials. Process',
        time: 20000
    }
]
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
    title: 'Top 3 incidents in progress',
    kpis: [
        {
        name: 'Public Access - Home Client',
        time: 20000
    },
    {
        name: 'Public Access - Connfigurator',
        time: 20000
    },
    {
        name: 'Backend - Initials. Process',
        time: 20000
    }
]
};