import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation UserLogin($emal: EmailAddress!, $password: String!) {
    userLogin(email: $email, password: $password) {
      _id
      name
      email
    }
  }
`;
