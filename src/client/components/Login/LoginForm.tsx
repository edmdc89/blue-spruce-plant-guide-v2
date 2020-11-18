/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import LoginInput from './Input';
import Submit from './SubmitBtn';

interface LoginFormProps {
  className?: string;
}

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.offWhite},
    ${(props) => props.theme.colors.offWhiteAccent}
  );
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1rem 0;
`;

const LoginForm = ({ className }: LoginFormProps): JSX.Element => {
  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <LoginInput id="email" label="email" />
      <LoginInput password id="password" label="password" />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default LoginForm;
