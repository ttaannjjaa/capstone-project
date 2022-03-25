import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import { MemoryRouter } from 'react-router-dom';

describe('ProfilePage', () => {
  it('renders a headline and an exit-button', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );

    const headline = screen.getByText('Mein Katzenprofil');
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
    const updateicon = screen.getByAltText('icon rotate arrow to the left');

    expect(binicon).toBeInTheDocument();
    expect(updateicon).toBeInTheDocument();
  });

  it('renders 3 inputelements for text, 1 inputelement for file and one textarea', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );

    const inputElementNote = screen.getByRole('textbox', { name: 'Notiz' });
    const inputElementAge = screen.getByRole('textbox', { name: 'Jahre' });
    const inputElementPetName = screen.getByTestId('inputPetName');
    const inputElementName = screen.getByTestId('inputCatName');
    const inputElementImg = screen.getByTestId('inputImgUpload');

    expect(inputElementNote).toBeInTheDocument();
    expect(inputElementAge).toBeInTheDocument();
    expect(inputElementPetName).toBeInTheDocument();
    expect(inputElementName).toBeInTheDocument();
    expect(inputElementImg).toBeInTheDocument();
  });
});
