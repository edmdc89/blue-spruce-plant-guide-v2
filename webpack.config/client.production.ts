import path from 'path';

import { Configuration as WebpackConfiguration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './common';

const LoadablePlugin = require('@loadable/webpack-plugin');

const clientConfig: WebpackConfiguration = merge(common, {
  mode: 'production',
  entry: {
    client: {
      import: './src/client/index.tsx',
      dependOn: ['react-vendors'],
    },
    'react-vendors': ['react', 'react-dom', 'react-helmet', 'react-router-dom'],
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [new LoadablePlugin({ writeToDisk: true })],
});

export default clientConfig;
