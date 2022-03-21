import { render, screen } from '@testing-library/react';
import FormPage from './FormPage.js';
import { MemoryRouter } from 'react-router-dom';

describe('FormPage', () => {
  it('renders a page with a heading, a form and a button', () => {
    render(
      <MemoryRouter>
        <FormPage
          formData={{
            foodJudge: 'liked',
            foodName: 'schnurrkatz',
            foodTaste: 'Huhn',
            foodStyle: 'Gelee',
          }}
        />
      </MemoryRouter>
    );

    const formHeading = screen.getByText(/Hier kannst Du/i);
    const form = screen.getByTestId('form');
    const buttonSave = screen.getByRole('button', { name: 'SPEICHERN' });

    expect(formHeading).toBeInTheDocument();
    expect(buttonSave).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
