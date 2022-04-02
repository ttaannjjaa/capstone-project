import { render, screen } from '@testing-library/react';
import DisLikedFoodPage from './DisLikedFoodPage.js';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop.js';

describe('DisLikedFoodPage', () => {
  it('renders a headline and an unordered list of cards, which has an accessible name', () => {
    render(
      <MemoryRouter>
        <DisLikedFoodPage
          storageData={[
            {
              foodRating: 'liked',
              foodName: 'purrcat',
              foodTaste: 'chicken',
              foodStyle: 'jelly',
              selectedDate: '2022-03-22',
            },
            {
              foodRating: 'disliked',
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
        <DisLikedFoodPage
          storageData={[
            {
              foodRating: 'liked',
              foodName: 'purrcat',
              foodTaste: 'chicken',
              foodStyle: 'jelly',
              selectedDate: '2022-03-22',
            },
            {
              foodRating: 'disliked',
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

  it('renders a scrolltotop button', () => {
    global.scrollTo = jest.fn();

    render(
      <MemoryRouter>
        <ScrollToTop noScrollToTopButton={false} />
      </MemoryRouter>
    );

    const ScrollToTopButtonImg = screen.getByAltText('icon with arrow up');

    expect(ScrollToTopButtonImg).toBeInTheDocument();
  });
});
