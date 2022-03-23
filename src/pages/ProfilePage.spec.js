import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import { MemoryRouter } from 'react-router-dom';

describe('ProfilePage', () => {
  it('renders a headline', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );
    expect(screen.getByText('Das ist meine Seite')).toBeInTheDocument();
  });
});
