import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignUp';

interface LiSuProps {
  className?: string;
}

const LoginSignupForm = ({ className }: LiSuProps): JSX.Element => {
  const [view, setView] = useState('signup');
  return view === 'signup' ? (
    <SignupForm className={className} changeView={setView} />
  ) : (
    <LoginForm className={className} changeView={setView} />
  );
};

export default LoginSignupForm;
