/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { GET_QUIZ_TRACKER, GET_RANDOM_QUIZ } from '../../../config/store/api/plants/queries';
import { PlantDetails, IQuizChoice } from '../../../types/app';
import { Loading } from '../../components/Common/Loading';
import { QuizCard } from '../../components/QuizCard';

const Quiz = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUIZ);
  const {
    data: { currentQuizTracker },
  } = useQuery(GET_QUIZ_TRACKER);
  if (loading) return <Loading />;
  if (error) console.log(error);
  if (currentQuizTracker) console.log(currentQuizTracker);
  return <QuizCard />;
};

export default Quiz;
