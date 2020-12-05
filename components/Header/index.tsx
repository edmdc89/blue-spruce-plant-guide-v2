import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>Blue Spruce Plant Guide</a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/plants">
          <a>Plant Catalog</a>
        </Link>
        <span>|</span>
        <Link href="/quiz">
          <a>Quiz</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
