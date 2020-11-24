import fetch from 'cross-fetch';
import { createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
});

// const authLink = setContext((_, { headers }) => {
//   if (window) {
//     const token = window.localStorage.getItem('userToken');
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${JSON.parse(token).token}` : '',
//       },
//     };
//   }
// });

export default httpLink;
