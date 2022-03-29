import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  it('renders a card with 5 list elements', () => {
    render(<Card />);

    const showsCard = screen.getByRole('listbox');
    const liElement1 = screen.getByText(/name/);
    const liElement2 = screen.getByText(/flavour/);
    const liElement3 = screen.getByText(/preparation/);
    const liElement4 = screen.getByText(/rating/);
    const liElement5 = screen.getByText(/fed on/i);

    expect(showsCard).toBeInTheDocument();
    expect(liElement1).toBeInTheDocument();
    expect(liElement2).toBeInTheDocument();
    expect(liElement3).toBeInTheDocument();
    expect(liElement4).toBeInTheDocument();
    expect(liElement5).toBeInTheDocument();
  });

  it('renders an unordered list with an accessible name', () => {
    render(<Card />);
    const ulAccessibility = screen.getByTestId('cardcontent list', {
      accessibleName: 'list of catfood properties',
    });
    expect(ulAccessibility).toBeInTheDocument();
  });
});
