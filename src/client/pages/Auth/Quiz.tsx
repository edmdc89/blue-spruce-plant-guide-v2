/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_QUIZ } from '../../../config/store/api/plants/queries';
import { PlantDetails, IQuizChoice } from '../../../types/app';
import { Loading } from '../../components/Common/Loading';
import { QuizCard } from '../../components/QuizCard';

const Quiz = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUIZ);
  if (loading) return <Loading />;
  if (error) console.log(error);
  const quiz: IQuizChoice = data.getPlantQuiz;
  return <QuizCard />;
};

export default Quiz;
