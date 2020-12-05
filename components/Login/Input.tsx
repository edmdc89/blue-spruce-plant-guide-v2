/** @jsx jsx */
import { css, jsx, SerializedStyles, Theme, useTheme } from '@emotion/react';
import { Dispatch, SetStateAction } from 'react';
import { thinShadow } from '../../ui/common/mixins';

interface InputProps {
  id: string;
  label: string;
  password?: boolean;
  noLabelDisplay?: boolean;
  className?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const baseInputStyles = (theme: Theme, noLabelDisplay?: boolean): SerializedStyles => css`
  display: flex;
  flex-flow: column nowrap;
  width: 65%;
  font-size: 1.6rem;
  align-items: left;
  margin: 0.3rem;
  padding: 0.6rem;

  input {
    height: ${noLabelDisplay ? '3.7rem' : '3.1rem'};
    border-radius: ${theme.borderRadius};
    padding: 0.4rem;
    font-size: ${noLabelDisplay ? '2.1rem' : '1.8rem'};
    font-family: 'Ubuntu', sans-serif;
    font-weight: 200;
    border: 0.2rem solid ${theme.colors.textDark};
    ${thinShadow}

    &:focus {
      box-shadow: 0 0 0.5rem 0.3rem ${theme.colors.primary};
    }
  }

  label {
    font-family: 'Fira Sans', sans-serif;
    margin-bottom: 0.3rem;
    font-size: 1.8rem;
  }
`;

const LoginInput = ({
  id,
  label,
  className,
  password,
  noLabelDisplay,
  value,
  setValue,
}: InputProps): JSX.Element => {
  const theme = useTheme();
  return (
    <div css={baseInputStyles(theme, noLabelDisplay)} className={className}>
      {!noLabelDisplay && <label htmlFor={id}>{label}:</label>}
      <input
        id={id}
        value={value}
        type={password ? 'password' : 'text'}
        onChange={(event) => setValue(event.target.value)}
        placeholder={noLabelDisplay ? label : ''}
        aria-label={id}
      />
    </div>
  );
};

export default LoginInput;
