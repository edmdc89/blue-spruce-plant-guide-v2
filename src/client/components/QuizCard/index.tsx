/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { jsx } from '@emotion/react';
import { GET_RANDOM_QUIZ } from '../../../config/store/api/plants/queries';
import { Loading } from '../Common/Loading';

export const QuizCard = (): JSX.Element => {
  const { loading, error, data: quiz } = useQuery(GET_RANDOM_QUIZ);
  if (loading) return <Loading />;
  if (error) console.log(error);
  if (quiz) console.log(quiz);

  return <h2>Hello World</h2>;
};
