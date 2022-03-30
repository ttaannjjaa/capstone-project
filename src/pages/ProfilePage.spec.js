import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import { MemoryRouter } from 'react-router-dom';

describe('ProfilePage', () => {
  it('renders a headline and an exit-button', () => {
    render(
      <MemoryRouter>
        <ProfilePage></ProfilePage>
      </MemoryRouter>
    );

    const headline = screen.getByText('CAT PROFILE');
    const exitButton = screen.getByTestId('button to leave the app');

    expect(headline).toBeInTheDocument();
    expect(exitButton).toBeInTheDocument();
  });

  it('renders an binicon and an updateicon', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );

    const binicon = screen.getByAltText('bin icon');
    const updateicon = screen.getByAltText('icon for adding');

    expect(binicon).toBeInTheDocument();
    expect(updateicon).toBeInTheDocument();
  });

  it('renders 2 inputelements for text, 1 inputelement for a file (while hidden tested by its label), 1 inputelement for a number and one textarea', () => {
    render(
      <MemoryRouter>
        <ProfilePage hidden="false" />
      </MemoryRouter>
    );

    const inputElementNote = screen.getByRole('textbox', { name: 'Note' });
    const inputElementAge = screen.getByTestId('inputAge');
    const inputElementPetName = screen.getByTestId('inputPetName');
    const inputElementName = screen.getByTestId('inputCatName');
    const labelInputElementImg = screen.getByTestId('inputLabelImgUpload');

    expect(inputElementNote).toBeInTheDocument();
    expect(inputElementAge).toBeInTheDocument();
    expect(inputElementPetName).toBeInTheDocument();
    expect(inputElementName).toBeInTheDocument();
    expect(labelInputElementImg).toBeInTheDocument();
  });
});
