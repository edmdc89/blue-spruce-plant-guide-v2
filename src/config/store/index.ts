import { ApolloClient, createHttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

import { cache } from './cache';
import typeDefs from './schema';

export const apolloClient = new ApolloClient({
  ssrMode: true,
  cache: cache,
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch,
  }),
  typeDefs: typeDefs,
  connectToDevTools: true,
});
