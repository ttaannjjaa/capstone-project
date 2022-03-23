import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form.js';
import { act } from 'react-dom/test-utils';

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
            selectedDate: '2022-03-22',
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

  it('renders two inputfields, one textarea, two radio-buttons, a date inputfield and one button', () => {
    render(
      <Form
        formData={{
          foodJudge: 'liked',
          foodName: 'schnurrkatz',
          foodTaste: 'Huhn',
          foodStyle: 'Gelee',
          selectedDate: '2022-03-22',
        }}
      />
    );

    const inputFields = screen.getAllByRole('textbox');
    const inputDate = screen.getByLabelText(/verfüttert am/i);
    const radiobuttons = screen.getAllByRole('radio');
    const group = screen.getByRole('group');
    const buttonForm = screen.getByRole('button');

    expect(radiobuttons).toHaveLength(2);
    expect(inputFields).toHaveLength(3);
    expect(buttonForm).toBeInTheDocument();
    expect(group).toBeInTheDocument();
    expect(inputDate).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: /Speichern/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('does not call the submit function when the submit button is clicked and the required fields are not filled', () => {
    const handleSubmit = jest.fn();
    const onSubmit = jest.fn();

    render(
      <MemoryRouter>
        <Form onSubmit={handleSubmit(onSubmit)} />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button');
    act(() => {
      submitButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(handleSubmit).toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
