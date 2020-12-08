import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styles from './Header.module.scss';
import { isAuthenticated } from '../../lib/apolloClient/cache';

const GET_CURRENT_USER = gql`
  query getCurrentUser {
    currentUser @client
  }
`;

const Header = (): JSX.Element => {
  const { loading: loadingUser, data: userData, error: userError } = useQuery(
    GET_CURRENT_USER,
  );

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>Blue Spruce Plant Guide</a>
      </Link>
      <nav className={styles.nav}>
        {userData ? (
          <>
            <Link href="/user/plants">
              <a>Plant Catalog</a>
            </Link>
            <span>|</span>
            <Link href="/user/quiz">
              <a>Quiz</a>
            </Link>
            <span>|</span>
            <Link href="/">
              <a>logout</a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <span>|</span>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
