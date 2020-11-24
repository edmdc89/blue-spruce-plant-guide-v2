import { ApolloClient } from '@apollo/client';
import httpLink from './link';

import { cache } from './cache';

export const apolloClient = new ApolloClient({
  ssrMode: true,
  cache: cache,
  link: httpLink,
  connectToDevTools: true,
});
