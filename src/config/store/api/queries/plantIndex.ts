import { gql } from '@apollo/client';

export const GET_PLANT_PAGE = gql`
  query GetPlantPage {
    plantCatalog {
      commonName
      id
      imageUrl
      scientificName
    }
  }
`;
