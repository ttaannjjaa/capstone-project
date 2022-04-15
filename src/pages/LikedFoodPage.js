import styled from 'styled-components';
import { useState } from 'react';
import ButtonText from '../components/ButtonText.js';
import Card from '../components/Card.js';
import ExitButton from '../components/ExitButton.js';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import ScrollToTop from '../components/ScrollToTop.js';

export default function LikedFoodPage({
  storageData,
  handleDelete,
  handleEditing,
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
        <section>
          <span>Sort by ...</span>
          <div>
            <ButtonText
              variant="sortbutton"
              type="button"
              onClick={() => setSortValue('foodName')}
            >
              name
            </ButtonText>
            <ButtonText
              variant="sortbutton"
              type="button"
              onClick={() => setSortValue('foodTaste')}
            >
              flavour
            </ButtonText>
            <ButtonText
              variant="sortbutton"
              type="button"
              onClick={() => setSortValue('foodStyle')}
            >
              preparation
            </ButtonText>
            <ButtonText
              variant="sortbutton"
              type="button"
              onClick={() => setSortValue('selectedDate')}
            >
              date
            </ButtonText>
            <ButtonText
              variant="sortbutton"
              type="button"
              onClick={() => setSortValue('')}
            >
              last change
            </ButtonText>
          </div>
        </section>
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
                  handleEditing={() => handleEditing(data.id)}
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
  margin-top: 2rem;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 2.5rem;
  justify-content: center;
`;
