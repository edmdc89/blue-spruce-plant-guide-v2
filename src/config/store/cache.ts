import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return loggedInStatus();
          },
        },
      },
    },
  },
});

export const loggedInStatus = makeVar(false);
