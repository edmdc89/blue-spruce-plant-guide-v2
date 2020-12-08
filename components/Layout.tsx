import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Header from './Header';
import { isAuthenticated } from '../lib/apolloClient/cache';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const onLoad = async () => {
    try {
      await Auth.currentSession();
      isAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e.message);
      }
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
