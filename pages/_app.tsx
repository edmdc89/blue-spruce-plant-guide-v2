import React from 'react';
// import { Amplify } from 'aws-amplify';
import Layout from '../components/Layout';
import '../styles/main.scss';

const App = ({ Component, pageProps }): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
