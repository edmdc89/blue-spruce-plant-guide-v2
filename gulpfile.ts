import path from 'path';
import { parallel } from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import clientDevConfig from './webpack.config/client.development';
import serverDevConfig from './webpack.config/server.development';
import { onBuild } from './webpack.config/helpers';
import nodemon from 'nodemon';

const clientCompiler = webpack(clientDevConfig);

const clientDevServer = new WebpackDevServer(clientCompiler, {
  port: 8081,
  hot: true,
  publicPath: 'http://localhost:8081/',
  watchContentBase: true,
});

const serverWatcher = webpack(serverDevConfig).watch(
  {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  (err, stats) => {
    onBuild('Server')(err, stats);
    nodemon.restart();
  },
);

const runClientDevServer = () =>
  clientDevServer.listen(8081, () => console.log('Client Dev Server Started!!'));

const serverWatch = () => serverWatcher;

const run = () => {
  nodemon({
    execMap: {
      js: 'node',
    },
    script: path.join(__dirname, 'dist', 'server.js'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop',
  })
    .on('start', () => {
      console.log('Starting Client Dev Server...');
      clientDevServer;
    })
    .on('restart', () => console.log('Restarted!'))
    .on('quit', () => {
      clientDevServer.close(() => console.log('Client Watcher ended!'));
      serverWatcher.close(() => console.log('Server Watcher ended!'));
    });
  console.log('Server - exited!');
};

exports.serve = parallel(serverWatch, runClientDevServer, run);
