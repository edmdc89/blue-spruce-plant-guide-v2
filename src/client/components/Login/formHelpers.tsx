/** @jsx jsx */
import { headingStyles } from '../../ui/typography/headings';
import { css, jsx } from '@emotion/react';
import { Dispatch, SetStateAction } from 'react';

export interface LoginFormProps {
  className?: string;
  changeView: Dispatch<SetStateAction<string>>;
  view?: string;
}

export const LoginFormMessage = ({ view, changeView }: LoginFormProps): JSX.Element => {
  const msg = view === 'signup' ? 'Already a user?' : 'Not a user?';
  const targetView = view === 'signup' ? 'login' : 'signup';
  const targetText = view === 'signup' ? 'Login' : 'Sign Up';

  return (
    <p
      css={css`
        ${headingStyles('h6', { inverColor: true, thin: true })}
        position: absolute;
        top: 0;
        right: 1.3rem;
      `}
    >
      {msg} | <span onClick={() => changeView(targetView)}>{targetText}</span>
    </p>
  );
};

export const clearInputs = (e: React.FormEvent): void => {
  // @ts-ignore
  const { email, password } = e.currentTarget;
  email.value = '';
  password.value = '';
  // @ts-ignore
  if (e.currentTarget.name) {
    // @ts-ignore
    e.currentTarget.name.value = '';
  }
};
