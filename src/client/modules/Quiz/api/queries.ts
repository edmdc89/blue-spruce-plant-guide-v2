import { gql } from '@apollo/client';

export const GET_CURRENT_QUIZ = gql`
  query GetCurrentQuiz {
    currentQuiz @client
  }
`;
