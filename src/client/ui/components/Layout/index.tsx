import React from 'react';
import { Global, css, ThemeProvider } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../../../config/router/routes';
import Header from '../Header';
import theme from '../../common/theme';

export default function Layout(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
      </main>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            font-size: 62.5%;
          }

          body {
            box-sizing: border-box;
            overflow-y: hidden;
            font-family: 'Ubuntu', sans-serif;
            background: ${theme.colors.primary};
            height: 100vh;
            overflow-y: scroll;
          }
        `}
      />
    </ThemeProvider>
  );
}
