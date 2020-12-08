import withApollo from '../lib/apolloClient';
import React, { useEffect } from 'react';
import Header from './Header';
import { gql, useQuery } from '@apollo/client';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
