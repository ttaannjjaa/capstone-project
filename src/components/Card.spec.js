import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  it('renders a card with 3 list elements', () => {
    render(<Card />);

    const showsaCard = screen.getByRole('listbox');
    const liElement1 = screen.getByText(/Marke/);
    const liElement2 = screen.getByText(/Sorte/);
    const liElement3 = screen.getByText(/Zubereitung/);

    expect(showsaCard).toBeInTheDocument();
    expect(liElement1).toBeInTheDocument();
    expect(liElement2).toBeInTheDocument();
    expect(liElement3).toBeInTheDocument();
  });

  it('renders an unordered list with an accessible name', () => {
    render(<Card />);
    const ulAccessibility = screen.getByTestId('cardcontent list', {
      accessibleName: 'list of catfood properties',
    });
    expect(ulAccessibility).toBeInTheDocument();
  });
});
