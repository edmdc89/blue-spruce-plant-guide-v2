import React from 'react';
import Layout from '../components/Layout';
import '../styles/main.scss';

const App = ({ Component, pageProps }): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
