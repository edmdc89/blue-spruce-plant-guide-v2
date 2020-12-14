import withApollo from '../../../lib/apolloClient';
import React, { useState } from 'react';
import QuizCard from '../../../components/QuizCard';
import Layout from '../../../components/Layout';
import styles from './Quiz.module.scss';

const Quiz = () => {
  return (
    <Layout>
      <QuizCard className={styles.card} />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Quiz);
