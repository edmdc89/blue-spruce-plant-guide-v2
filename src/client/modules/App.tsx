import React from 'react';
import { Global, css } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../config/router/routes';
// import Layout from './Layout';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from '../ui/common/root';
// import { getGruvBoxTheme } from '../ui/common/theme';

export default function App(): JSX.Element {
  return (
    <>
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
            height: 100vh;
            overflow-y: scroll;
          }
        `}
      />
    </>
  );
}
