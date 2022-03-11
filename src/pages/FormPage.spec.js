import { render, screen } from '@testing-library/react';
import FormPage from './FormPage.js';
import { MemoryRouter } from 'react-router-dom';

describe('FormPage', () => {
  it('renders a page with a heading, a button and a navigation', () => {
    render(
      <MemoryRouter>
        <FormPage
          formData={{
            foodJudge: true,
            foodName: 'schnurrkatz',
            foodTaste: 'Huhn',
            foodStyle: 'Gelee',
          }}
        />
      </MemoryRouter>
    );

    const formHeading = screen.getByText(/Hier kannst Du/i);
    const buttonSave = screen.getByRole('button', { name: 'SPEICHERN' });
    const navigationLink = screen.getAllByRole('link');

    expect(formHeading).toBeInTheDocument();
    expect(buttonSave).toBeInTheDocument();
    expect(navigationLink).toHaveLength(3);
  });
});
