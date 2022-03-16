import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';

describe('Searchbar', () => {
  it('renders a searchbar with an image and an inputfield and a label for accessibility', () => {
    render(<Searchbar />);

    const searchIcon = screen.getByRole('img', { name: 'search icon' });
    const searchInput = screen.getByRole('searchbox');

    expect(searchIcon).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});
