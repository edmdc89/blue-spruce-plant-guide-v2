import { ApolloLink, HttpLink } from '@apollo/client';
import { Auth } from 'aws-amplify';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/dev/graphql',
});

const getSession = async () => {
  let session;
  try {
    session = await Auth.currentSession();
    console.log(session);
    return session;
  } catch (e) {
    console.log(e);
  }
};

const AuthLink = new ApolloLink((operation, forward) => {
  getSession();
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));
  return forward(operation);
});

export default AuthLink.concat(httpLink);
