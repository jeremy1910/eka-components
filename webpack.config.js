const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
            '@tanstack/react-query': path.resolve(__dirname, './node_modules/@tanstack/react-query'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "styled-components": {
            commonjs: 'styled-components',
            commonjs2: 'styled-components',
            amd: 'styled-components',
            root: 'styled'
        },
        "@tanstack/react-query": {
            commonjs: '@tanstack/react-query',
            commonjs2: '@tanstack/react-query',
            amd: '@tanstack/react-query',
            root: 'react-query'
        }
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ]
};