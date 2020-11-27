/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Loading } from '../../components/Common/Loading';
import { QuizCard } from '../../components/QuizCard';
import { useQuizTracker } from '../../components/QuizCard/utils';

const Quiz = (): JSX.Element => {
  const { loading, error, quizTracker } = useQuizTracker();
  if (loading) return <Loading />;
  if (quizTracker) console.log(quizTracker());
  return <QuizCard />;
};

export default Quiz;
