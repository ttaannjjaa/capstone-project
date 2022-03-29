import { render, screen } from '@testing-library/react';
import ModalDelete from './ModalDelete';

describe('ModalDelete', () => {
  it('renders two buttons', () => {
    render(<ModalDelete />);

    const buttonConfirm = screen.getByText(/Yes/i);
    const buttonCancel = screen.getByText('No');

    expect(buttonConfirm).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
  });
});
