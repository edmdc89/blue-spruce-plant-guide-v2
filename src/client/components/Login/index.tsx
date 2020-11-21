/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import LoginInput from './Input';
import Submit from './SubmitBtn';
import Form from './Form';
import { headingStyles } from '../../ui/typography/headings';
import { useMutation } from '@apollo/client';
import { USER_LOGIN, USER_SIGNUP } from '../../../config/store/api/user/mutations';
import { useState } from 'react';

interface LoginFormProps {
  className?: string;
}

const LoginSingupForm = ({ className }: LoginFormProps): JSX.Element => {
  const [isLoginView, setLoginView] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userLogin, { data: loginData, error: loginError }] = useMutation(USER_LOGIN);
  const [userSignup, { data: signupData, error: signupError }] = useMutation(USER_SIGNUP);

  const LoginFormMessage = (): JSX.Element => {
    const msg = isLoginView ? 'Not a user?' : 'Already a user?';
    const targetView = isLoginView ? 0 : 1;
    const targetText = isLoginView ? 'Sign Up' : 'Login';

    return (
      <p
        css={css`
          ${headingStyles('h6', { inverColor: true, thin: true })}
          position: absolute;
          top: 0;
          right: 1.3rem;
        `}
      >
        {msg} | <span onClick={() => setLoginView(targetView)}>{targetText}</span>
      </p>
    );
  };

  const clearInputs = (): void => {
    setEmail('');
    setPassword('');
    if (!isLoginView) {
      setName('');
    }
  };

  const handleLoginSubmission = async (): Promise<void> => {
    const { data } = await userLogin({ variables: { email, password } });
    localStorage.setItem('userToken', JSON.stringify(data.userLogIn.token));
    console.log(localStorage.getItem('userToken'));
    clearInputs();
  };

  const handleSignupSubmission = async (): Promise<void> => {
    const { data } = await userSignup({ variables: { name, email, password } });
    localStorage.setItem('userToken', JSON.stringify(data.userSignUp.token));
    console.log(localStorage.getItem('userToken'));
    clearInputs();
  };

  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        isLoginView ? handleLoginSubmission() : handleSignupSubmission();
      }}
    >
      <LoginFormMessage />
      {loginError && <h6>{loginError.message}</h6>}
      {signupError && <h6>{signupError.message}</h6>}
      {!isLoginView && <LoginInput id="name" label="name" value={name} setValue={setName} />}
      <LoginInput id="email" label="email" value={email} setValue={setEmail} />
      <LoginInput
        password
        id="password"
        label="password"
        value={password}
        setValue={setPassword}
      />
      <Submit>Submit</Submit>
      {loginData && <h6>Login Successful!</h6>}
      {signupData && <h6>User Successfully Created!</h6>}
    </Form>
  );
};

export default LoginSingupForm;
