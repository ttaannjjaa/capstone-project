import styled from 'styled-components';
import { useState } from 'react';
import Card from '../components/Card.js';
import ExitButton from '../components/ExitButton.js';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import ScrollToTop from '../components/ScrollToTop.js';
import Searchbar from '../components/Searchbar.js';

export default function DisLikedFoodPage({
  storageData,
  handleDelete,
  onScrollToTop,
  noScrollToTopButton,
}) {
  const disLikedData = storageData.filter(
    data => data.foodRating === 'disliked'
  );

  const [userInput, setUserInput] = useState('');

  function handleUserInput(event) {
    event.preventDefault();
    const input = event.target.value;
    setUserInput(input);
  }

  const filteredDislikedData = disLikedData.filter(data =>
    Object.values(data).some(val =>
      val.toLowerCase().includes(userInput.trim().toLowerCase())
    )
  );

  return (
    <DisLikedFoodPageStyled>
      <HeaderDisLikedFoodPage variant="dislikedfoodpage">
        <HeadingStyled>
          <h1>NOT MY TASTE</h1>
          <ExitButton />
        </HeadingStyled>
        <SearchStyled>
          <Searchbar handleUserInput={handleUserInput} userInput={userInput} />
        </SearchStyled>
      </HeaderDisLikedFoodPage>
      <main>
        {disLikedData.length === 0 && (
          <p>
            You don't have any list entries here yet. List entries appear when
            the form is filled out and saved.
          </p>
        )}
        {userInput.length === 0 && (
          <ListStyle
            data-testid="dislikedlist"
            aria-describedby="list of cards about catfood that your cat does not like"
            role="list"
          >
            {disLikedData.map(data => (
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
        {userInput.length > 0 && filteredDislikedData.length === 0 && (
          <p>
            Either your cat likes the food or it's not here yet as list entry
            available.
          </p>
        )}
        {userInput.length > 0 && filteredDislikedData.length > 0 && (
          <ListStyle
            data-testid="dislikedlist"
            aria-describedby="list of cards about catfood that your cat does not like"
            role="list"
          >
            {filteredDislikedData.map(data => (
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
      <Navigation />
      <ScrollToTop onClick={onScrollToTop} hidden={noScrollToTopButton} />
    </DisLikedFoodPageStyled>
  );
}

const DisLikedFoodPageStyled = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: fit-content 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
    background-color: var(--peach);
  }

  p {
    margin-top: 1rem;
    padding: 1rem 1.5rem 0 1.5rem;
  }
`;

const HeaderDisLikedFoodPage = styled(Header)`
  grid-row: 1 / 2;

  h1 {
    width: 100%;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    background-color: var(--lightsteel);
    align-self: center;
    color: var(--black);
  }
`;

const HeadingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  margin-right: 1rem;
`;

const SearchStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  justify-content: flex-start;
  background-color: var(--lightsteel);
`;

const ListStyle = styled.ul`
  margin-top: 2rem;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 1rem;
  justify-content: center;
`;
