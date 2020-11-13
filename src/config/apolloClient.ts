import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'http://localhost:8080',
    fetch,
  }),
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

export default apolloClient;
