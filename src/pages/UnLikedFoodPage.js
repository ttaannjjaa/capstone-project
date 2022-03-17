import styled from 'styled-components';
import Card from '../components/Card.js';
import Searchbar from '../components/Searchbar.js';
import Navigation from '../components/Navigation.js';
import { useState } from 'react';

export default function UnLikedFoodPage({ storageData, handleDelete }) {
  const unLikedData = storageData.filter(data => data.foodJudge === 'unliked');

  const [userInput, setUserInput] = useState('');

  function handleUserInput(event) {
    event.preventDefault();
    const input = event.target.value;
    setUserInput(input);
  }

  const filteredUnlikedData = unLikedData.filter(data =>
    Object.values(data).some(val =>
      val.toLowerCase().includes(userInput.trim().toLowerCase())
    )
  );

  return (
    <UnLikedFoodPageStyled>
      <Header>
        <h1>Ich futtere lieber etwas anderes als...</h1>
        <SearchStyled>
          <Searchbar handleUserInput={handleUserInput} userInput={userInput} />
        </SearchStyled>
      </Header>
      <main>
        {unLikedData.length === 0 && (
          <p>
            Du hast hier noch keine Listeneinträge. <br /> Listeneinträge
            erscheinen, wenn das Formular ausgefüllt und gespeichert wird.
          </p>
        )}
        {userInput.length === 0 && (
          <ListStyle
            data-testid="unlikedlist"
            aria-describedby="list of cards about catfood that your cat does not like"
            role="list"
          >
            {unLikedData.map(data => (
              <li key={data.id}>
                <Card
                  id={data.id}
                  foodName={data.foodName}
                  foodTaste={data.foodTaste}
                  foodStyle={data.foodStyle}
                  foodJudge={data.foodJudge}
                  handleDelete={() => handleDelete(data.id)}
                />
              </li>
            ))}
          </ListStyle>
        )}
        {userInput.length > 0 && filteredUnlikedData.length === 0 && (
          <p>
            Entweder mag deine Katze das Futter oder es ist hier noch nicht als
            Listeneintrag vorhanden.
          </p>
        )}
        {userInput.length > 0 && filteredUnlikedData.length > 0 && (
          <ListStyle
            data-testid="unlikedlist"
            aria-describedby="list of cards about catfood that your cat does not like"
            role="list"
          >
            {filteredUnlikedData.map(data => (
              <li key={data.id}>
                <Card
                  id={data.id}
                  foodName={data.foodName}
                  foodTaste={data.foodTaste}
                  foodStyle={data.foodStyle}
                  foodJudge={data.foodJudge}
                  handleDelete={() => handleDelete(data.id)}
                />
              </li>
            ))}
          </ListStyle>
        )}
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
  grid-template-rows: 9.5rem 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
  }

  p {
    margin-top: 1rem;
    padding: 1rem 1.5rem 0 1.5rem;
  }
`;

const Header = styled.header`
  background-color: var(--peach);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  box-shadow: var(--box-shadow-header-drop);
  grid-row: 1 / 2;
  display: grid;
  grid-template-rows: 4.5rem 5rem;

  h1 {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    background-color: var(--peach);
    align-self: center;
    color: var(--steelblue);
    letter-spacing: 1px;
  }
`;

const SearchStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  justify-content: flex-start;
  background-color: var(--peach);
`;

const ListStyle = styled.ul`
  margin-top: 1.5rem;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 1.5rem;
  justify-content: center;
`;
