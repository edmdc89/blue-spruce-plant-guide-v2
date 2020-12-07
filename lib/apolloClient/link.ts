import { ApolloLink, HttpLink } from '@apollo/client';
import { Auth } from 'aws-amplify';

const httpLink = new HttpLink({
  uri: 'https://cd5ixi9lj0.execute-api.us-east-1.amazonaws.com/dev/graphql',
});

const authMiddleware = () => {
  const headers = Auth.Credentials;
  console.log(headers);
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
