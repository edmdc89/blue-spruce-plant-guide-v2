import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { isAuthenticated } from '../../lib/apolloClient/cache';

const Header = (): JSX.Element => {
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

export default Header;
