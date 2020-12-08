import withApollo from '../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import QuizCard from '../../components/QuizCard';
import { GET_RANDOM_QUIZ } from '../../lib/apolloClient/queries';
import Layout from '../../components/Layout';
import useQuizTracker from '../../lib/hooks/useQuizTracker';

const Quiz = () => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUIZ);
  const { score, round, totalRounds, nextRound, increaseScore } = useQuizTracker();
  const { plantQuiz } = data || {};

  if (error) return <h1>{error.message}</h1>;

  const checkUserAnswer = (userAnswerID: number) => {
    if (userAnswerID === plantQuiz[round].answerID) {
      increaseScore();
    }
    if (round === totalRounds - 1) {
      alert(`Quiz Done. Score: ${score} of ${totalRounds}`);
      return;
    }
    nextRound();
  };

  return (
    <Layout>
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <QuizCard
            round={round}
            scoreHandler={(userAnswerID) => checkUserAnswer(userAnswerID)}
            currentQuestion={plantQuiz[round]}
          />
        )}
      </>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Quiz);
