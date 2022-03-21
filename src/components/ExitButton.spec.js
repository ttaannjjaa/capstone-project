import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ExitButton from './ExitButton';

describe('ExitButton', () => {
  it('renders a button which calls a function and an image', () => {
    const navigate = jest.fn();
    render(
      <MemoryRouter>
        <ExitButton onClick={navigate()} />
      </MemoryRouter>
    );
    const exitButton = screen.getByTestId('button to leave the app');
    const exitCatAtTheDoorIcon = screen.getByAltText(
      'black cat wanting to walk through open door - icon for leaving the app'
    );

    expect(exitButton).toBeInTheDocument();
    expect(exitCatAtTheDoorIcon).toBeInTheDocument();
    expect(navigate).toHaveBeenCalled();
  });
});
