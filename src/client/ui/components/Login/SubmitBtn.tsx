/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';

type SubmitProps = {
  width: number;
  children: JSX.Element;
};

const Submit = ({ children, width }: SubmitProps) => {
  return <button type="submit">{children}</button>;
};
