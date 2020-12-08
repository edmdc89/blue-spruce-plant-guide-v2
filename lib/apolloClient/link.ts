import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/dev/graphql',
});

export default httpLink;
// 'https://mz4y6djivh.execute-api.us-east-1.amazonaws.com/dev/graphql'
