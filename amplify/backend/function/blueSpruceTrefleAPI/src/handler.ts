const { ApolloServer } = require('apollo-server-lambda');

const typeDefs = require('./schema');
const TrefleAPI = require('./trefleAPI/model');
const resolvers = require('./rootResolver');

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    trefleAPI: new TrefleAPI(),
  }),
  resolvers,
  context: async ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: '/dev/graphql',
  },
  introspection: true,
});

module.exports = server;
