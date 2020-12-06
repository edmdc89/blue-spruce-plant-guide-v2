import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

const MockHeader = (): JSX.Element => <Header />;

describe('App header', () => {
  it.skip('should have a title', () => {
    const { getByRole } = render(<MockHeader />);
    const appTitle = getByRole('heading', { name: 'Blue Spruce Plant Guide' });
    expect(appTitle).toBeInTheDocument();
  });

  it.skip('should have a nav bar with two links', () => {
    const { getByRole } = render(<MockHeader />);
    const plantIndexLink = getByRole('link', { name: 'Plant Index' });
    const quizLink = getByRole('link', { name: 'Quiz' });

    expect(plantIndexLink).toBeInTheDocument();
    expect(quizLink).toBeInTheDocument();
  });
});
