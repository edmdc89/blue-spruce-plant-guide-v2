import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { Layout } from './components';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../config/store';
import { IS_LOGGED_IN } from '../config/store/api/user/queries';

const render = (App: () => JSX.Element) => {
  const cache = createCache({ key: 'custom' });
  const token = localStorage.getItem('userToken');
  if (token) {
    apolloClient.writeQuery({
      query: IS_LOGGED_IN,
      data: {
        isLoggedIn: !!window.localStorage.getItem('userToken'),
      },
    });
  }
  const root = document.getElementById('root');
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

loadableReady(() => render(Layout));
