/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import LoginInput from './Input';

const Form = styled.form`
  height: 100%;
  width: 38%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.offWhite},
    ${(props) => props.theme.colors.offWhiteAccent}
  );
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 1rem;
`;

const LoginForm = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <LoginInput id="email" label="email" />
      <LoginInput password id="password" label="password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default LoginForm;
