/** @jsx jsx */
import { jsx } from '@emotion/react';
import LoginInput from './Input';
import Submit from './SubmitBtn';
import Form from './Form';
import { Dispatch, SetStateAction } from 'react';
import { headingStyles } from '../../ui/typography/headings';

export interface LoginFormProps {
  className?: string;
  changeView: Dispatch<SetStateAction<string>>;
}

const SignupForm = ({ className, changeView }: LoginFormProps): JSX.Element => {
  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <h6 css={headingStyles('h6', { inverColor: true, thin: true })}>
        Already a User? | <button onClick={() => changeView('login')}>Login</button>
      </h6>
      <LoginInput id="name" label="name" />
      <LoginInput id="email" label="email" />
      <LoginInput password id="password" label="password" />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default SignupForm;
