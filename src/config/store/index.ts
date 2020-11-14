import { ApolloClient, createHttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

import { cache } from './cache';

export const apolloClient = new ApolloClient({
  ssrMode: true,
  cache: cache,
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch,
  }),
  connectToDevTools: true,
});
