import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import EditButton from './EditButton.js';

describe('EditButton', () => {
  it('renders a button which shows an image and calls a function', () => {
    const handleEditing = jest.fn();
    const id = 5;
    render(
      <MemoryRouter>
        <EditButton id={id} onClick={() => handleEditing()} />
      </MemoryRouter>
    );
    const buttonToEdit = screen.getByTestId('button to activate edit function');
    const buttonImgEdit = screen.getByAltText('pencil icon');

    expect(buttonToEdit).toBeInTheDocument();
    expect(buttonImgEdit).toBeInTheDocument();
  });
});
