import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Layout from '../components/Layout';
import '../styles/main.scss';

export default function App({ Component, pageProps }): JSX.Element {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
