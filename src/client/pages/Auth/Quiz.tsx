/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_QUIZ } from '../../../config/store/api/plants/queries';
import { Loading } from '../../components/Common/Loading';
import { QuizCard } from '../../components/QuizCard';
import { quizTracker } from '../../../config/store/cache';

const Quiz = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUIZ);
  if (loading) return <Loading />;
  if (error) console.log(error);
  if (data) {
    quizTracker({ ...quizTracker(), currentQuiz: data.plantQuiz });
  }
  console.log(quizTracker());
  return <QuizCard />;
};

export default Quiz;
