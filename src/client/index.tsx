import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import { useApolloClient } from '../config/store';
import { CookiesProvider } from 'react-cookie';
// import { IS_LOGGED_IN } from '../config/store/api/user/queries';
import { Root } from './pages';

const render = (App: () => JSX.Element) => {
  const root = document.getElementById('root');
  const Client = () => {
    const cache = createCache({ key: 'custom' });
    const apolloClient = useApolloClient();
    return (
      <ApolloProvider client={apolloClient}>
        <CookiesProvider>
          <BrowserRouter>
            <CacheProvider value={cache}>
              <App />
            </CacheProvider>
          </BrowserRouter>
        </CookiesProvider>
      </ApolloProvider>
    );
  };

  ReactDOM.hydrate(<Client />, root);
};

loadableReady(() => render(Root));
