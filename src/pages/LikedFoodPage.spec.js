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

    const headline = screen.getByText('I really like to eat...');
    const ulAccessibility = screen.getByTestId('likedlist', {
      accessibleName: 'list of cards about catfood that your cat like',
    });

    expect(headline).toBeInTheDocument();
    expect(ulAccessibility).toBeInTheDocument();
  });

  it('renders a section for a sortfunction with 3 buttons', () => {
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

    const sortSection = screen.getByText('Du kannst sortieren nach...');
    const button1 = screen.getByRole('button', { name: 'Marke' });
    const button2 = screen.getByRole('button', { name: 'Sorte' });
    const button3 = screen.getByRole('button', { name: 'Zubereitung' });

    expect(sortSection).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });
});
