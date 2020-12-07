import { ApolloLink, HttpLink } from '@apollo/client';
import { Auth } from 'aws-amplify';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/dev/graphql',
});

const authMiddleware = () => {
  return new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
      },
    }));
    return forward(operation);
  });
};
export default authMiddleware().concat(httpLink);
