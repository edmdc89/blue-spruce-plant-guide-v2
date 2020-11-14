import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_CURRENT_QUIZ } from '../../config/store/api/queries/plantIndex';

const Home = (): JSX.Element => {
  const { data } = useQuery(GET_CURRENT_QUIZ);
  console.log(data);
  return <h2>Hello World</h2>;
};

export default Home;
