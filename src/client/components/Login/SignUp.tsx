/** @jsx jsx */
import { jsx } from '@emotion/react';
import LoginInput from './Input';
import Submit from './SubmitBtn';
import Form from './Form';

interface LoginFormProps {
  className?: string;
}

const SignupForm = ({ className }: LoginFormProps): JSX.Element => {
  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <LoginInput id="name" label="name" />
      <LoginInput id="email" label="email" />
      <LoginInput password id="password" label="password" />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default SignupForm;
