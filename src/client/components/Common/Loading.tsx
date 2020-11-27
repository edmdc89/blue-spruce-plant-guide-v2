/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { headingStyles } from '../../ui/typography/headings';

interface ILoadingProps {
  className?: string;
}

export const Loading = ({ className }: ILoadingProps): JSX.Element => (
  <article className={className} css={css``}>
    <h4 css={headingStyles('h4')}>Loading...</h4>
  </article>
);
