/** @jsx jsx */
import { jsx } from '@emotion/react';
import LoginInput from './Input';
import Submit from './SubmitBtn';
import Form from './Form';
import { clearInputs, LoginFormMessage, LoginFormProps } from './formHelpers';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../../../config/store/api/user/mutations';

const LoginForm = ({ className, changeView }: LoginFormProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, { data }] = useMutation(USER_LOGIN);
  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        clearInputs(e);
      }}
    >
      <LoginFormMessage view="login" changeView={changeView} />
      <LoginInput id="email" label="email" value={email} setValue={setEmail} />
      <LoginInput
        password
        id="password"
        label="password"
        value={password}
        setValue={setPassword}
      />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default LoginForm;
