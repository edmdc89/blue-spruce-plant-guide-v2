import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation UserLogin($email: EmailAddress!, $password: String!) {
    userLogIn(email: $email, password: $password) {
      _id
      name
      email
    }
  }
`;

export const USER_SIGNUP = gql`
  mutation UserSignup($name: String!, $email: EmailAddress!, $password: String!) {
    userSignUp(name: $name, email: $email, password: $password) {
      _id
      name
      email
    }
  }
`;
