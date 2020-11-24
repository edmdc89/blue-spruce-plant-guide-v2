import { ApolloClient } from '@apollo/client';

import { cache } from './cache';
import Link from './link';

export const apolloClient = new ApolloClient({
  ssrMode: true,
  cache: cache,
  link: Link,
  connectToDevTools: true,
});
