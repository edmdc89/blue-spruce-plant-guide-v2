import { gql } from '@apollo/client';

export const GET_PLANT_PAGE = gql`
  query GetPlantPage {
    plantCatalog {
      commonName
      id
      imageUrl
      scientificName
      familyScientificName
      familyCommonName
    }
  }
`;

export const GET_RANDOM_PLANT_PAGE = gql`
  query GetRandomPlantPage {
    randomPlantCatalog {
      commonName
      scientificName
      id
      imageUrl
      familyScientificName
      familyCommonName
    }
  }
`;

export const GET_RANDOM_QUIZ = gql`
  query GetRandomPlantQuiz {
    getPlantQuiz {
      answerID
      choices {
        id
        commonName
        scientificName
        imageUrl
      }
    }
  }
`;

export const GET_QUIZ_TRACKER = gql`
  query tracker {
    quizTracker @client
  }
`;
