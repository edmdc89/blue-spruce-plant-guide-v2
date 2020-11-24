import { ApolloClient } from '@apollo/client';

import { cache } from './cache';
import httpLink from './link';

export const apolloClient = new ApolloClient({
  ssrMode: true,
  cache: cache,
  link: httpLink,
  connectToDevTools: true,
});
