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
    plantQuiz {
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
