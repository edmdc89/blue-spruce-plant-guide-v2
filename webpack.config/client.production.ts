import path from 'path';

import { Configuration as WebpackConfiguration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './common';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';

const LoadablePlugin = require('@loadable/webpack-plugin');

const clientConfig: WebpackConfiguration = merge(common, {
  mode: 'production',
  entry: {
    client: {
      import: './src/client/index.tsx',
      dependOn: ['react-vendors'],
    },
    'react-vendors': [
      'react',
      'react-dom',
      'react-helmet',
      'react-router-dom',
      '@apollo/client',
      'graphql',
    ],
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [new LoadablePlugin({ writeToDisk: true })],
});

export default clientConfig;
