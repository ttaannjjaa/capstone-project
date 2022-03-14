import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation', () => {
  it('renders two navigation links and two images', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const images = screen.getAllByRole('img');
    const navigationButtons = screen.getAllByRole('link');
    expect(navigationButtons).toHaveLength(3);
    expect(images).toHaveLength(3);
  });
});
