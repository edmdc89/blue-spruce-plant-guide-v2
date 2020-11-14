import { Home, PlantIndex } from '../../client/pages';
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
  // {
  //   path: '/quiz',
  //   component: Quiz,
  //   routes: [
  //     {
  //       path: '/quiz/results',
  //       component: QuizResults,
  //     },
  //   ],
  // },
];

export default routes;
