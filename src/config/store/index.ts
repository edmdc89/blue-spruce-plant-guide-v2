import { ApolloClient, createHttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

import { cache } from './cache';

export default new ApolloClient({
  ssrMode: true,
  cache: cache.restore(window.__APOLLO_STATE__),
  link: createHttpLink({
    uri: 'http://localhost:8080/',
    credentials: 'same-origin',
    fetch,
  }),
  connectToDevTools: true,
});

