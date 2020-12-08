import React from 'react';
import { Auth } from 'aws-amplify';
import useFormFields from '../../lib/hooks/useFormFields';
import styles from './AuthForm.module.scss';

const LoginForm = (): JSX.Element => {
  const [fields, handleFieldChange, clearField] = useFormFields({ email: '', password: '' });

  const clearInputs = (): void => {
    clearField('email');
    clearField('password');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.signIn(fields.email, fields.password);
      alert('Logged in');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(event);
        clearInputs();
      }}
    >
      <div className={styles.input}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={fields.email}
          id="email"
          onChange={(e) => handleFieldChange(e)}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={fields.password}
          id="password"
          onChange={(e) => handleFieldChange(e)}
        />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
