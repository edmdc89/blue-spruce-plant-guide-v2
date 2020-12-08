import withApollo from '../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import QuizCard from '../../components/QuizCard';
import { GET_RANDOM_QUIZ } from '../../lib/apolloClient/queries';
import Layout from '../../components/Layout';

const Quiz = () => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUIZ);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const { plantQuiz } = data || {};

  if (error) return <h1>{error.message}</h1>;

  const checkUserAnswer = (userAnswerID: number) => {
    if (userAnswerID === plantQuiz[round].answerID) {
      setScore(score + 1);
      console.log(round);
    }
  };

  return (
    <Layout>
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <QuizCard
            nextRound={() => setRound(round + 1)}
            scoreHandler={(userAnswerID) => checkUserAnswer(userAnswerID)}
            currentQuestion={plantQuiz[round]}
          />
        )}
      </>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Quiz);
