import path from 'path';

import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './common';

import nodeExternals from 'webpack-node-externals';

const serverConfig: webpack.Configuration = merge(common, {
  mode: 'development',
  entry: {
    server: './src/server/index.ts',
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:8082/',
  },
  target: 'node',
  devServer: {
    port: 8082,
    hot: true,
    writeToDisk: true,
    publicPath: 'http://localhost:8082/',
  },
  node: {
    __dirname: false,
  },
  externals: nodeExternals(),
});

export default serverConfig;
