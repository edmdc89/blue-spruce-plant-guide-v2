import React from 'react';
import { Amplify } from 'aws-amplify';
import Layout from '../components/Layout';
import '../styles/main.scss';
import config from '../config';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

const App = ({ Component, pageProps }): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
