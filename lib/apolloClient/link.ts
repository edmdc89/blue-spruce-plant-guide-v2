import { ApolloLink, HttpLink } from '@apollo/client';
import { Auth } from 'aws-amplify';

const httpLink = new HttpLink({
  uri: 'https://mz4y6djivh.execute-api.us-east-1.amazonaws.com/dev/graphql',
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
