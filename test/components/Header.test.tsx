import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from '../../src/client/components/Header';
import theme from '../../src/client/ui/common/theme';
import { ThemeProvider } from '@emotion/react';

const MockHeader = (): JSX.Element => (
  <Router>
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  </Router>
);

describe('App header', () => {
  it('should have a title', () => {
    const { getByRole } = render(<MockHeader />);
    const appTitle = getByRole('heading', { name: 'Blue Spruce Plant Guide' });
    expect(appTitle).toBeInTheDocument();
  });

  it('should have a nav bar with two links', () => {
    const { getByRole } = render(<MockHeader />);
    const plantIndexLink = getByRole('link', { name: 'Plant Index' });
    const quizLink = getByRole('link', { name: 'Quiz' });

    expect(plantIndexLink).toBeInTheDocument();
    expect(quizLink).toBeInTheDocument();
  });
});
