import { render, screen } from '@testing-library/react';
import DeleteButton from './DeleteButton';

describe('DeleteButton', () => {
  it('renders a button with the image bin-icon', () => {
    render(<DeleteButton />);

    const deleteButton = screen.getByRole('button');
    const iconbin = screen.getByRole('img', { name: 'bin icon' });

    expect(deleteButton).toBeInTheDocument();
    expect(iconbin).toBeInTheDocument();
  });
});
