import React from 'react';
import { Global, css } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../../config/router/routes';
import Header from './Header';

export default function Layout(): JSX.Element {
  return (
    <>
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
            height: 100vh;
            overflow-y: scroll;
          }
        `}
      />
    </>
  );
}
