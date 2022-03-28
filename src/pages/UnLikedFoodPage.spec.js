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
              foodRating: 'liked',
              foodName: 'purrcat',
              foodTaste: 'chicken',
              foodStyle: 'jelly',
              selectedDate: '2022-03-22',
            },
            {
              foodRating: 'unliked',
              foodName: 'catmax',
              foodTaste: 'salmon',
              foodStyle: 'ragu',
              selectedDate: '2022-03-22',
            },
          ]}
        />
      </MemoryRouter>
    );

    const headline = screen.getByRole('heading', {
      textcontent: 'NOT MY TASTE',
    });
    const ulAccessibility = screen.getByTestId('unlikedlist', {
      accessibleName: 'list of cards about catfood that your cat does not like',
    });

    expect(headline).toBeInTheDocument();
    expect(ulAccessibility).toBeInTheDocument();
  });

  it('renders a searchbar with the label "Suche" and a search icon', () => {
    render(
      <MemoryRouter>
        <UnLikedFoodPage
          storageData={[
            {
              foodRating: 'liked',
              foodName: 'purrcat',
              foodTaste: 'chicken',
              foodStyle: 'jelly',
              selectedDate: '2022-03-22',
            },
            {
              foodRating: 'unliked',
              foodName: 'catmax',
              foodTaste: 'salmon',
              foodStyle: 'ragu',
              selectedDate: '2022-03-22',
            },
          ]}
        />
      </MemoryRouter>
    );

    const searchbar = screen.getByRole('searchbox');
    const searchicon = screen.getByRole('img', { name: 'search icon' });
    const searchlabel = screen.getByText('Search');

    expect(searchbar).toBeInTheDocument();
    expect(searchicon).toBeInTheDocument();
    expect(searchlabel).toBeInTheDocument();
  });
});
