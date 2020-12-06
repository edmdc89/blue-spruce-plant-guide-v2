import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/dev/graphql',
  credentials: 'same-origin',
});

export default httpLink;
