import { render, screen } from '@testing-library/react';
import CatInfoPage from './CatInfoPage.js';

describe('CatInfoPage', () => {
  it('renders', () => {
    render(<CatInfoPage />);
    expect(screen.getByText('catinfopage')).toBeInTheDocument();
  });
});
