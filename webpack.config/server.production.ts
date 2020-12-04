import path from 'path';

import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './common';

import nodeExternals from 'webpack-node-externals';

const serverConfig: webpack.Configuration = merge(common, {
  mode: 'production',
  entry: {
    server: './src/server/index.ts',
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js',
  },
  target: 'node',
  node: false,
  externals: nodeExternals(),
});

export default serverConfig;
