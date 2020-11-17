/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { remify } from '../../common/helpers';
import LoginInput from './Input';
import Submit from './SubmitBtn';

const Form = styled.form`
  height: 100%;
  width: 50%;
  max-width: ${(props) => `calc(50% - 2 * ${remify(props.theme.gridGap)})`};
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
  padding: 1rem 0;
`;

const LoginForm = (): JSX.Element => {
  return (
    <Form
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
