import React from 'react';
import Header from './Header';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
