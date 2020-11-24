import { ApolloClient } from '@apollo/client';
import { httpLink, authMiddleware } from './link';

import { cache } from './cache';
import { useAuthToken } from '../../client/utils/useAuthToken';

export const useApolloClient = (): any => {
  const [authToken] = useAuthToken();

  return new ApolloClient({
    ssrMode: true,
    cache: cache,
    link: authMiddleware(authToken).concat(httpLink),
    connectToDevTools: true,
  });
};
