/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { css, jsx, useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { IS_LOGGED_IN } from '../../../config/store/api/user/queries';
import { headingStyles } from '../../ui/typography/headings';
import { activeLinkStyles, linkBaseStyles } from '../../ui/typography/links';

const headerStyles = css`
  height: 9rem;
  max-width: 110rem;
  margin: 1.5rem auto;
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Header = (): JSX.Element => {
  const { data } = useQuery(IS_LOGGED_IN);
  if (data) {
    console.log(data);
  }
  const theme = useTheme();
  return (
    <header
      css={css`
        ${headerStyles}
        background: ${theme.colors.secondaryAccent};
      `}
    >
      <NavLink css={linkBaseStyles} to="/">
        <h1 css={headingStyles('h1')}>Blue Spruce Plant Guide</h1>
      </NavLink>
      {data?.isLoggedIn && (
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
            Plant Catalog
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
      )}
    </header>
  );
};

export default Header;
