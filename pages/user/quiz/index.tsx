import withApollo from '../../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import QuizCard from '../../../components/QuizCard';
import { GET_RANDOM_QUIZ } from '../../../lib/apolloClient/queries';
import Layout from '../../../components/Layout';
import useQuizTracker from '../../../lib/hooks/useQuizTracker';
import styles from './Quiz.module.scss';

const Quiz = () => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUIZ);
  const { score, round, totalRounds, nextRound, increaseScore } = useQuizTracker();
  const { plantQuiz } = data || {};

  const checkUserAnswer = (userAnswerID: number): boolean => {
    if (userAnswerID === plantQuiz[round].answerID) {
      increaseScore();
      return true;
    }
    return false;
  };

  return (
    <Layout>
      <section className={styles.container}>
        <article className={styles.stats}>
          <h1>Round:</h1>
          <h2>{round}</h2>
          <h1>Score:</h1>
          <h2>{score}</h2>
        </article>
        {loading ? (
          <h1>Loading...</h1> ? (
            error
          ) : (
            <h1>{error.message}</h1>
          )
        ) : (
          <QuizCard
            className={styles.card}
            round={round}
            checkUserAnswer={checkUserAnswer}
            nextRound={nextRound}
            currentQuestion={plantQuiz[round]}
          />
        )}
      </section>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Quiz);
