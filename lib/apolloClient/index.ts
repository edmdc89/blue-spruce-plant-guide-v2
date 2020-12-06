import { withApollo } from 'next-apollo';
import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
import link from './link';

const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link,
  cache,
  connectToDevTools: true,
});

export default withApollo(apolloClient);
