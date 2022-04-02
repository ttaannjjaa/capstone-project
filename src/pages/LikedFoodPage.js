import styled from 'styled-components';
import { useState } from 'react';
import Card from '../components/Card.js';
import ExitButton from '../components/ExitButton.js';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import { SortButtonStyled } from '../components/SortButtonStyled.js';
import ScrollToTop from '../components/ScrollToTop.js';

export default function LikedFoodPage({
  storageData,
  handleDelete,
  onScrollToTop,
  noScrollToTopButton,
}) {
  const likedData = storageData.filter(data => data.foodRating === 'liked');

  const [sortValue, setSortValue] = useState('');

  function sortData() {
    if (!sortValue) {
      return likedData;
    }
    const sortResult = likedData.slice().sort((a, b) => {
      let sortValueA = a[sortValue].toLowerCase();
      let sortValueB = b[sortValue].toLowerCase();

      if (sortValueA > sortValueB) {
        return +1;
      }
      if (sortValueA < sortValueB) {
        return -1;
      }
      return 0;
    });
    return sortResult;
  }

  return (
    <LikedFoodPageStyle>
      <HeaderLikedFoodPage variant="likedfoodpage">
        <div>
          <h1>WHAT I LIKE TO EAT</h1>
          <ExitButton />
        </div>
        {likedData.length > 0 && (
          <section>
            <span>Sort by ...</span>
            <div>
              <SortButtonStyled
                type="button"
                onClick={() => setSortValue('foodName')}
              >
                name
              </SortButtonStyled>
              <SortButtonStyled
                type="button"
                onClick={() => setSortValue('foodTaste')}
              >
                flavour
              </SortButtonStyled>
              <SortButtonStyled
                type="button"
                onClick={() => setSortValue('foodStyle')}
              >
                preparation
              </SortButtonStyled>

              <SortButtonStyled
                type="button"
                onClick={() => setSortValue('selectedDate')}
              >
                date
              </SortButtonStyled>
              <SortButtonStyled type="button" onClick={() => setSortValue('')}>
                entry
              </SortButtonStyled>
            </div>
          </section>
        )}
      </HeaderLikedFoodPage>
      <main>
        {likedData.length === 0 && (
          <p>
            You don't have any list entries here yet. List entries appear when
            the form is filled out and saved.
          </p>
        )}
        {likedData.length > 0 && (
          <ListStyle
            role="list"
            data-testid="likedlist"
            aria-describedby={'list of cards about catfood that your cat like'}
          >
            {sortData().map(data => (
              <li key={data.id}>
                <Card
                  id={data.id}
                  foodName={data.foodName}
                  foodTaste={data.foodTaste}
                  foodStyle={data.foodStyle}
                  foodRating={data.foodRating}
                  selectedDate={data.selectedDate}
                  handleDelete={() => handleDelete(data.id)}
                />
              </li>
            ))}
          </ListStyle>
        )}
      </main>
      <ScrollToTop onClick={onScrollToTop} hidden={noScrollToTopButton} />
      <Navigation />
    </LikedFoodPageStyle>
  );
}

const LikedFoodPageStyle = styled.section`
  display: grid;
  grid-template-rows: fit-content 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
    background-color: var(--peach);
  }

  p {
    margin-top: 1rem;
    padding: 1rem;
  }
`;

const HeaderLikedFoodPage = styled(Header)`
  grid-row: 1 / 2;
  display: block;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  h1 {
    width: 100%;
    font-size: 1.1rem;
    text-overflow: ellipsis;
    padding-bottom: 1rem;
  }

  section {
    border-top: 1px solid var(--steelblue);
    padding-top: 0.3rem;
    color: var(--black);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    span {
      padding: 2px 0 6px 0;
    }

    div {
      display: flex;
      flex-wrap: nowrap;
    }
  }
`;

const ListStyle = styled.ul`
  margin-top: 1rem;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 1rem;
  justify-content: center;
`;
