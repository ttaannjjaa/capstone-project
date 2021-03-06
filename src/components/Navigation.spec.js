import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders two navigation links and two images', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const images = screen.getAllByRole('img');
    const navigationButtons = screen.getAllByRole('link');
    expect(navigationButtons).toHaveLength(4);
    expect(images).toHaveLength(4);
  });
});
