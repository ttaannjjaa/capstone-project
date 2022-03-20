import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ExitButton from './ExitButton';

describe('ExitButton', () => {
  it('renders a button and an image', () => {
    const navigate = jest.fn();
    render(
      <MemoryRouter>
        <ExitButton onClick={navigate()} />
      </MemoryRouter>
    );
    const exitButton = screen.getByRole('button');
    const exitCatAtTheDoorIcon = screen.getByAltText(
      'black cat wanting to walk through open door - icon for leaving the app'
    );

    expect(exitButton).toBeInTheDocument();
    expect(exitCatAtTheDoorIcon).toBeInTheDocument();
  });
});
