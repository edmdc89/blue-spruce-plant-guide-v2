import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import App from './modules/App';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from '../config/apolloClient';

const render = (App: () => JSX.Element) => {
  const cache = createCache({ key: 'custom' });
  const root = document.getElementById('root');
  const Client = (
    <ApolloProvider client={ApolloClient}>
      <CacheProvider value={cache}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CacheProvider>
    </ApolloProvider>
  );

  ReactDOM.hydrate(Client, root);
};

loadableReady(() => render(App));
