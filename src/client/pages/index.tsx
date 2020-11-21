/** @jsx jsx */
import { Global, jsx, ThemeProvider } from '@emotion/react';
import Home from './Home';
import PlantIndex from './PlantIndex';
import Quiz from './Quiz';
import routes from '../../config/router/routes';
import Header from '../components/Header/index';
import { theme, globalStyles } from '../ui/common/theme';
import { renderRoutes } from 'react-router-config';

const Root = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{renderRoutes(routes.routes)}</main>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export { Root, Home, PlantIndex, Quiz };
