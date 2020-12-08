import React, { useEffect } from 'react';
import withApollo from '../../lib/apolloClient/index';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import styles from './Header.module.scss';
import { isAuthenticated } from '../../lib/apolloClient/cache';

const Header = (): JSX.Element => {
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
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>Blue Spruce Plant Guide</a>
      </Link>
      <nav className={styles.nav}>
        {isAuthenticated() ? (
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

export default withApollo({ ssr: true })(Header);
