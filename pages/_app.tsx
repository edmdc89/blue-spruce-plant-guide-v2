import React from 'react';
import { Amplify } from 'aws-amplify';
import Layout from '../components/Layout';
import config from '../src/aws-exports';
import '../styles/main.scss';

Amplify.configure({ ...config, ssr: true });

const App = ({ Component, pageProps }): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
