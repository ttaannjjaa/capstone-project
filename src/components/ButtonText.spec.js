import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';

import ButtonText from './ButtonText';

describe('ButtonText', () => {
  it('renders a button and calls a function when the user clicks', () => {
    const mockFunction = jest.fn();

    render(<ButtonText onClick={mockFunction} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockFunction).toHaveBeenCalled();
  });
});
