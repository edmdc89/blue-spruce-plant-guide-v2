/** @jsx jsx */
import { jsx } from '@emotion/react';
import LoginInput from './Input';
import Submit from './SubmitBtn';
import Form from './Form';
import { clearInputs, LoginFormMessage, LoginFormProps } from './formHelpers';

const SignupForm = ({ className, changeView }: LoginFormProps): JSX.Element => {
  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        clearInputs(e);
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
