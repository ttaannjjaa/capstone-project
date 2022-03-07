import { render, screen } from '@testing-library/react';
import UnLikedFoodPage from './UnLikedFoodPage.js';

describe('UnLikedFoodPage', () => {
  it('renders a headline and an unordered list of cards, which has an accessible name', () => {
    render(<UnLikedFoodPage />);

    const headline = screen.getByRole('heading', {
      textcontent: 'Ich futtere lieber etwas anderes als...',
    });
    const ulAccessibility = screen.getByTestId('unlikedlist', {
      accessibleName: 'list of cards about catfood that your cat does not like',
    });

    expect(headline).toBeInTheDocument();
    expect(ulAccessibility).toBeInTheDocument();
  });
});
