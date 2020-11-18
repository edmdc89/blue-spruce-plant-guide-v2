import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SingupForm from './SignUp';

interface LiSuProps {
  className?: string;
}

const LoginSingupForm = ({ className }: LiSuProps): JSX.Element => {
  const [view, setView] = useState('signup');
  return view === 'signup' ? (
    <SingupForm className={className} changeView={setView} />
  ) : (
    <LoginForm className={className} changeView={setView} />
  );
};

export default LoginSingupForm;
