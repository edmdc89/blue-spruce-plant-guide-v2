/** @jsx jsx */
import { jsx } from '@emotion/react';
import LoginInput from './Input';
import Submit from './SubmitBtn';
import Form from './Form';
import { LoginFormProps } from './SignUp';
import { headingStyles } from '../../ui/typography/headings';

const LoginForm = ({ className, changeView }: LoginFormProps): JSX.Element => {
  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <h6 css={headingStyles('h6', { inverColor: true, thin: true })}>
        Not a user? | <span onClick={() => changeView('signup')}>Sing Up</span>
      </h6>
      <LoginInput id="email" label="email" />
      <LoginInput password id="password" label="password" />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default LoginForm;
