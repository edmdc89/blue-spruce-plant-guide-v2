import path from 'path';

import { Configuration as WebpackConfiguration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './common';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const LoadablePlugin = require('@loadable/webpack-plugin');

const clientConfig: WebpackConfiguration = merge(common, {
  mode: 'development',
  entry: {
    client: {
      import: './src/client/index.tsx',
      dependOn: 'react-vendors',
    },
    'react-vendors': ['react', 'react-dom'],
  },
  devtool: 'source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
    new LoadablePlugin(),
  ],
});

export default clientConfig;
