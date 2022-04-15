import { render, screen } from '@testing-library/react';
import FormPage from './FormPage.js';
import { MemoryRouter } from 'react-router-dom';

describe('FormPage', () => {
  it('renders a page with a heading, a form and a button', () => {
    render(
      <MemoryRouter>
        <FormPage
          formData={{
            foodRating: 'liked',
            foodName: 'purrcat',
            foodTaste: 'chicken',
            foodStyle: 'jelly',
            selectedDate: 'date',
          }}
          editData={{
            foodRating: 'disliked',
            foodName: 'meowmeow',
            foodTaste: 'beef',
            foodStyle: 'sauce',
            selectedDate: '2022-03-28',
          }}
        />
      </MemoryRouter>
    );

    const formHeading = screen.getByText(/CAT FOOD RATING/i);
    const form = screen.getByTestId('form');
    const buttonSave = screen.getByRole('button', { name: 'SAVE' });

    expect(formHeading).toBeInTheDocument();
    expect(buttonSave).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
