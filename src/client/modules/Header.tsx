/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { headingStyles } from '../ui/typography/headings';
import { activeLinkStyles, linkBaseStyles } from '../ui/typography/links';

const headerStyles = css`
  height: 9rem;
  width: 110rem;
  margin: 1.5rem auto;
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Header = (): JSX.Element => {
  const theme = useTheme();
  return (
    <section
      css={css`
        ${headerStyles}
        background: linear-gradient(
          to bottom right,
          ${theme.colors.secondary},
          ${theme.colors.secondaryAccent}
        );
      `}
    >
      <NavLink css={linkBaseStyles} to="/">
        <h1 css={headingStyles('h1')}>Blue Spruce Plant Guide</h1>
      </NavLink>
      <nav>
        <NavLink
          css={[
            headingStyles('h4'),
            activeLinkStyles(
              theme.borderSize,
              theme.colors.secondary,
              theme.colors.secondaryAccent,
            ),
          ]}
          to="/plant-index"
        >
          Plant Index
        </NavLink>
        <NavLink
          css={[
            headingStyles('h4'),
            activeLinkStyles(
              theme.borderSize,
              theme.colors.secondary,
              theme.colors.secondaryAccent,
            ),
          ]}
          to="/quiz"
        >
          Quiz
        </NavLink>
      </nav>
    </section>
  );
};

export default Header;
