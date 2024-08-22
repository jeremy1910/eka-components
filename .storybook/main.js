const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-typescript'
  ],
  framework: '@storybook/react-webpack5',
  core: {
    builder: 'webpack5'
  },
  // webpackFinal: async (config) => {
  //     config.resolve.alias = {
  //         ...config.resolve.alias,
  //         '@components': path.resolve(__dirname, '../components/src'),
  //     };
  //     return config;
  // },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};