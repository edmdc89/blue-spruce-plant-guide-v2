/** @jsx jsx */
import { Global, css, jsx, ThemeProvider } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PlantIndex from './PlantIndex';
import Quiz from './Quiz';
import routes from '../../config/router/routes';
import Header from '../components/Header/index';
import { theme, globalStyles } from '../ui/common/theme';

const Root = (): JSX.Element => {
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
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export { Root, Home, PlantIndex, Quiz };
