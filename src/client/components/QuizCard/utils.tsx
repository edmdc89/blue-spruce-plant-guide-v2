import { ApolloError, ReactiveVar, useQuery } from '@apollo/client';
import { GET_RANDOM_QUIZ } from '../../../config/store/api/plants/queries';
import { quizTracker } from '../../../config/store/cache';
import { IQuizInfo } from '../../../types/app';

export const useQuizTracker = (): {
  loading: boolean;
  error?: ApolloError;
  quizTracker: ReactiveVar<IQuizInfo>;
} => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUIZ);
  if (error) console.log(error);
  if (data) {
    quizTracker({ ...quizTracker(), currentQuiz: data.plantQuiz });
  }
  return { loading, error, quizTracker };
};
