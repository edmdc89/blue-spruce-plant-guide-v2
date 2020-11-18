/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import LoginInput from './Input';
import Submit from './SubmitBtn';
import Form from './Form';
import { Dispatch, SetStateAction } from 'react';
import { headingStyles } from '../../ui/typography/headings';

export interface LoginFormProps {
  className?: string;
  changeView: Dispatch<SetStateAction<string>>;
  view?: string;
}

export const LoginFormMessage = ({ view, changeView }: LoginFormProps): JSX.Element => {
  const msg = view === 'signup' ? 'Already a user?' : 'Not a user?';
  const targetView = view === 'signup' ? 'login' : 'signup';
  const targetText = view === 'signup' ? 'Login' : 'Sign Up';

  return (
    <p
      css={css`
        ${headingStyles('h6', { inverColor: true, thin: true })}
        position: absolute;
        top: 0;
        right: 1.3rem;
      `}
    >
      {msg} | <span onClick={() => changeView(targetView)}>{targetText}</span>
    </p>
  );
};

const SignupForm = ({ className, changeView }: LoginFormProps): JSX.Element => {
  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.currentTarget.name.value);
      }}
    >
      <LoginFormMessage view="signup" changeView={changeView} />
      <LoginInput id="name" label="name" />
      <LoginInput id="email" label="email" />
      <LoginInput password id="password" label="password" />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default SignupForm;
