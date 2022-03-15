import { render, screen } from '@testing-library/react';
import LikedFoodPage from './LikedFoodPage.js';
import { MemoryRouter } from 'react-router-dom';

describe('LikedFoodPage', () => {
  it('renders a headline and an unordered list of cards, the list has an accessible name', () => {
    render(
      <MemoryRouter>
        <LikedFoodPage
          storageData={[
            {
              foodJudge: 'liked',
              foodName: 'schnurrkatz',
              foodTaste: 'Huhn',
              foodStyle: 'Gelee',
            },
            {
              foodJudge: 'unliked',
              foodName: 'katzlecker',
              foodTaste: 'Lachs',
              foodStyle: 'Ragout',
            },
          ]}
        />
      </MemoryRouter>
    );

    const headline = screen.getByText('Mir schmeckt...');
    const ulAccessibility = screen.getByTestId('likedlist', {
      accessibleName: 'list of cards about catfood that your cat like',
    });

    expect(headline).toBeInTheDocument();
    expect(ulAccessibility).toBeInTheDocument();
  });
});
