import path from 'path';
import { parallel } from 'gulp';
import webpack from 'webpack';
import clientDevConfig from './webpack.config/client.development';
import serverDevConfig from './webpack.config/server.development';
import { onBuild } from './webpack.config/helpers';
import nodemon from 'nodemon';

const clientWatcher = webpack(clientDevConfig).watch(
  {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  (err, stats) => {
    onBuild('Client')(err, stats);
    nodemon.restart();
  },
);

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

const clientWatch = () => clientWatcher;

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
    .on('restart', () => console.log('Restarted!'))
    .on('quit', () => {
      clientWatcher.close(() => console.log('Client Watcher ended!'));
      serverWatcher.close(() => console.log('Server Watcher ended!'));
    });
  console.log('Server - exited!');
};

exports.serve = parallel(clientWatch, serverWatch, run);
