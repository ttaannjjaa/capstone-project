import { render, screen } from '@testing-library/react';
import UnLikedFoodPage from './UnLikedFoodPage.js';
import { MemoryRouter } from 'react-router-dom';

describe('UnLikedFoodPage', () => {
  it('renders a headline and an unordered list of cards, which has an accessible name', () => {
    render(
      <MemoryRouter>
        <UnLikedFoodPage
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
