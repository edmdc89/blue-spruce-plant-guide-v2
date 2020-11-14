import { Home, PlantIndex, Quiz } from '../../client/pages';
const routes = [
  {
    path: '/plant-index',
    exact: false,
    component: PlantIndex,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/quiz',
    exact: false,
    component: Quiz,
  },
];

export default routes;
