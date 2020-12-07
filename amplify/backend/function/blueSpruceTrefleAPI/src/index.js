const server = require('./handler');

exports.handler = server.createHandler({
  cors: {
    origin: 'http://localhost:3000/',
    credentials: true,
  },
});
