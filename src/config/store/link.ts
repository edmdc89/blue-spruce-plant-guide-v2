import fetch from 'cross-fetch';
import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
});

type Token = {
  token?: string;
  expiration?: string;
};

const authLink = setContext((_, { headers }) => {
  let authToken: Token = {};
  const storedToken = window.localStorage.getItem('userToken');
  if (storedToken) {
    authToken = JSON.parse(storedToken);
  }
  return {
    headers: {
      ...headers,
      authorization: authToken?.token ? `Bearer ${authToken.token}` : '',
    },
  };
});

export default authLink.concat(httpLink);
