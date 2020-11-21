import { Root, Home, PlantIndex, Quiz } from '../../client/pages';
const routes = {
  component: Root,
  routes: [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/plant-index',
      exact: false,
      component: PlantIndex,
    },
    {
      path: '/quiz',
      exact: false,
      component: Quiz,
    },
  ],
};
export default routes;
