import styled from 'styled-components';
import Card from '../components/Card.js';
import Searchbar from '../components/Searchbar.js';
import Navigation from '../components/Navigation.js';
import { useState } from 'react';
//import { useImmer } from 'use-immer';

export default function UnLikedFoodPage({ storageData }) {
  const UnLikedData = storageData?.filter(data => data.foodJudge === 'unliked');

  const [userInput, setUserInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleUserInput(event) {
    event.stopPropagation();
    event.preventDefault();
    const input = event.target.value.trim().toLowerCase();
    console.log('nr1', input);
    setUserInput(input);
    searchFunction(input);
    console.log('searchfunction wurde aufgerufen');
    //event.target.reset();
  }

  function searchFunction(eingabe) {
    const dataFilteredByFoodName = UnLikedData.filter(data =>
      data.foodName.toLowerCase().includes(eingabe)
    );
    // const dataFilteredByFoodTaste = UnLikedData.filter(data =>
    //   data.foodTaste.toLowerCase().includes(input)
    // );
    // const dataFilteredByFoodStyle = UnLikedData.filter(data =>
    //   data.foodStyle.toLowerCase().includes(input)
    // );
    setSearchResults(dataFilteredByFoodName);
    // updateSearchResults(dataFilteredByFoodTaste);
    // updateSearchResults(dataFilteredByFoodStyle);
  }

  return (
    <UnLikedFoodPageStyled>
      <Header>
        <h1>Ich futtere lieber etwas anderes als...</h1>
        <Searchbar handleUserInput={handleUserInput} userInput={userInput} />
      </Header>
      <main>
        {UnLikedData.length === 0 && (
          <p>
            Du hast hier noch keine Listeneinträge. Listeneinträge erscheinen,
            wenn das Formular ausgefüllt und gespeichert wird.
          </p>
        )}
        {userInput.length === 0 && (
          <ListStyle
            data-testid="unlikedlist"
            aria-describedby="list of cards about catfood that your cat does not like"
            role="list"
          >
            {UnLikedData.map((data, index) => (
              <li key={index}>
                <Card
                  foodName={data.foodName}
                  foodTaste={data.foodTaste}
                  foodStyle={data.foodStyle}
                  foodJudge={data.foodJudge}
                />
              </li>
            ))}
          </ListStyle>
        )}
        {userInput.length > 0 &&
          searchResults?.length ===
            0(
              <p>
                Entweder mag deine Katze das Futter oder es ist hier noch nicht
                als Listeneintrag vorhanden.
              </p>
            )}
        {userInput.length > 0 && searchResults?.length > 0}{' '}
        <ListStyle
          data-testid="unlikedlist"
          aria-describedby="list of cards about catfood that your cat does not like"
          role="list"
        >
          {searchResults.map((data, index) => (
            <li key={index}>
              <Card
                foodName={data.foodName}
                foodTaste={data.foodTaste}
                foodStyle={data.foodStyle}
                foodJudge={data.foodJudge}
              />
            </li>
          ))}
        </ListStyle>
      </main>
      <footer>
        <Navigation />
      </footer>
    </UnLikedFoodPageStyled>
  );
}

const UnLikedFoodPageStyled = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: 15vmin 1fr 50px;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
  }

  p {
    padding: 2.5rem 1.5rem 0 1.5rem;
  }
`;

const Header = styled.header`
  background-color: var(--white);
  padding: 5vmin 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  box-shadow: var(--box-shadow-header-drop);
  grid-row: 1 / 2;

  h1 {
    width: 100%;
    font-size: 1.2rem !important;
    font-weight: lighter;
  }
`;

const ListStyle = styled.ul`
  margin-top: 14vmin;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 10px;
  justify-content: center;
`;
