import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../config/store';
import { Root } from './pages';
import { loggedInStatus } from '../config/store/cache';

const render = (App: () => JSX.Element) => {
  const root = document.getElementById('root');
  const cache = createCache({ key: 'custom' });
  loggedInStatus(!!window.localStorage.getItem('userToken'));

  const Client = (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
  ReactDOM.hydrate(Client, root);
};

loadableReady(() => render(Root));
