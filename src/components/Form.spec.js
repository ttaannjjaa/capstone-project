import { render, screen } from '@testing-library/react';
import Form from './Form.js';
import { MemoryRouter } from 'react-router-dom';

describe('Form', () => {
  it('renders a form with an accessible name', () => {
    render(
      <MemoryRouter>
        <Form
          formData={{
            foodJudge: 'liked',
            foodName: 'schnurrkatz',
            foodTaste: 'Huhn',
            foodStyle: 'Gelee',
          }}
        />
      </MemoryRouter>
    );

    const FormComponent = screen.getByTestId('form', {
      accessibleName:
        'form to document the judgement of your cat about its food',
    });
    expect(FormComponent).toBeInTheDocument();
  });

  it('renders two inputfields, one textarea and one button', () => {
    render(
      <Form
        formData={{
          foodJudge: 'liked',
          foodName: 'schnurrkatz',
          foodTaste: 'Huhn',
          foodStyle: 'Gelee',
        }}
      />
    );

    const inputFields = screen.getAllByRole('textbox');
    const radiobuttons = screen.getAllByRole('radio');
    const group = screen.getByRole('group');
    const buttonForm = screen.getByRole('button');

    expect(radiobuttons).toHaveLength(2);
    expect(inputFields).toHaveLength(3);
    expect(buttonForm).toBeInTheDocument();
    expect(group).toBeInTheDocument();
  });

  it('renders a required input element and a required textarea', () => {
    render(
      <Form
        formData={{
          foodJudge: 'liked',
          foodName: 'schnurrkatz',
          foodTaste: 'Huhn',
          foodStyle: 'Gelee',
        }}
      />
    );

    const requiredInputElement = screen.getByLabelText(/Markenname/i);
    const requiredTextareaElement = screen.getByLabelText(/Sorte/i);

    expect(requiredInputElement).toBeRequired();
    expect(requiredTextareaElement).toBeRequired();
  });
});
