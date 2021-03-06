import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CatInfoPage from './CatInfoPage.js';
import ScrollToTop from '../components/ScrollToTop.js';

describe('CatInfoPage', () => {
  it('renders a headline and a return button with an image', () => {
    render(
      <MemoryRouter>
        <CatInfoPage />
      </MemoryRouter>
    );

    const backButton = screen.getByRole('button');
    const headlineCatBreeds = screen.getByText(/cat breeds/i);
    const imgInButton = screen.getByAltText(
      'cat icon with the head to the left'
    );

    expect(backButton).toBeInTheDocument();
    expect(headlineCatBreeds).toBeInTheDocument();
    expect(imgInButton).toBeInTheDocument();
  });

  it('renders an unordered list', () => {
    render(
      <MemoryRouter>
        <CatInfoPage
          catData={{
            name: 'Aegean',
            origin: 'Greece',
            temperament: 'Affectionate, Social, Intelligent, Playful, Active',
            description:
              'Native to the Greek islands known as the Cyclades in the Aegean Sea',
          }}
        />
      </MemoryRouter>
    );

    const catDataList = screen.getByRole('list');
    expect(catDataList).toBeInTheDocument();
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
