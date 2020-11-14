import { gql } from '@apollo/client';

const typeDefs = gql`
  type PlantInfo {
    id: Int
    commonName: String
    scientificName: String
    imageUrl: String
  }

  type QuizChoice {
    roundAnswers: [PlantInfo]
    correctAnswer: PlantInfo
  }

  type QuizInfo {
    round: Int
    quizLength: Int
    quizScore: Int
    currentQuiz: [QuizChoice]
  }
`;

export default typeDefs;
