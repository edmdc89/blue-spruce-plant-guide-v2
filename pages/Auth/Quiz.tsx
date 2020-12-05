/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { GET_RANDOM_QUIZ } from '../../../config/store/api/plants/queries';
import { Loading } from '../../components/Common/Loading';
import { QuizCard } from '../../components/QuizCard';
// import { useQuizTracker } from '../../components/QuizCard/utils';

const Quiz = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_RANDOM_QUIZ);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const { plantQuiz } = data || {};
  if (error) return <h2>{error.message}</h2>;
  const checkUserAnswer = (userAnswerID: number) => {
    if (userAnswerID === plantQuiz[round].answerID) {
      setScore(score + 1);
      console.log(round);
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <QuizCard
      changeRound={() => setRound(round + 1)}
      scoreHandler={(userAnswerID) => checkUserAnswer(userAnswerID)}
      currentQuestion={plantQuiz[round]}
    />
  );
};

export default Quiz;
