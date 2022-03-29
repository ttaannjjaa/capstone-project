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
              foodRating: 'liked',
              foodName: 'purrpurr',
              foodTaste: 'chicken',
              foodStyle: 'jelly',
              selectedDate: '2022-03-18',
            },
            {
              foodRating: 'unliked',
              foodName: 'yummyyummy',
              foodTaste: 'salmon',
              foodStyle: 'ragu',
              selectedDate: '2022-03-18',
            },
          ]}
        />
      </MemoryRouter>
    );

    const headline = screen.getByText('WHAT I LIKE TO EAT');
    const ulAccessibility = screen.getByTestId('likedlist', {
      accessibleName: 'list of cards about catfood that your cat like',
    });

    expect(headline).toBeInTheDocument();
    expect(ulAccessibility).toBeInTheDocument();
  });

  it('renders a section for a sortfunction with 5 buttons', () => {
    render(
      <MemoryRouter>
        <LikedFoodPage
          storageData={[
            {
              foodRating: 'liked',
              foodName: 'purrpurr',
              foodTaste: 'chicken',
              foodStyle: 'jelly',
              selectedDate: '2022-03-18',
            },
            {
              foodRating: 'unliked',
              foodName: 'yummyyummy',
              foodTaste: 'salmon',
              foodStyle: 'ragu',
              selectedDate: '2022-03-18',
            },
          ]}
        />
      </MemoryRouter>
    );

    const sortSection = screen.getByText('Sort by ...');
    const button1 = screen.getByRole('button', { name: 'name' });
    const button2 = screen.getByRole('button', { name: 'taste' });
    const button3 = screen.getByRole('button', { name: 'preparation' });
    const button4 = screen.getByRole('button', { name: 'date' });
    const button5 = screen.getByRole('button', { name: 'all' });

    expect(sortSection).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
    expect(button4).toBeInTheDocument();
    expect(button5).toBeInTheDocument();
  });
});
