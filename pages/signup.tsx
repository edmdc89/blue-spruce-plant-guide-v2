import React from 'react';
import useFormFields from '../lib/hooks/useFormFields';
import Layout from '../components/Layout';
import styles from '../components/AuthForm/AuthForm.module.scss';

const SignUpForm = (): JSX.Element => {
  const [fields, handleFieldChange, clearField] = useFormFields({
    email: '',
    password: '',
    name: '',
  });

  const clearInputs = (): void => {
    clearField('email');
    clearField('password');
    clearField('name');
  };

  return (
    <Layout>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          clearInputs();
        }}
      >
        <div className={styles.input}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={fields.name}
            id="name"
            onChange={(e) => handleFieldChange(e)}
          />
        </div>
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
        <button>Signup</button>
      </form>
    </Layout>
  );
};

export default SignUpForm;
