import { useMemo } from 'react';
import { ApolloClient } from '@apollo/client';
import merge from 'deepmerge';
import { cache } from './cache';
import link from './link';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache,
  });
}

export function initializeApollo(initialState = null): any {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(initialState, existingCache);

    _apolloClient.cache.restore(data);
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client, pageProps): any {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
