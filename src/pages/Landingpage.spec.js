import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from './Landingpage';

describe('Landingpage', () => {
  it('renders a h1 headline, three buttons', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const headline = screen.getByRole('heading');
    const button1 = screen.getByRole('button', {
      name: 'CAT FOOD RATING',
    });
    const button2 = screen.getByRole('button', {
      name: 'CAT FOOD icon white heart',
    });
    const button3 = screen.getByRole('button', {
      name: 'CAT FOOD icon red crossmark',
    });

    expect(headline).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });
});
