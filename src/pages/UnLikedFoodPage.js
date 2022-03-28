import styled from 'styled-components';
import { useState } from 'react';
import Card from '../components/Card.js';
import ExitButton from '../components/ExitButton.js';
import Searchbar from '../components/Searchbar.js';

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
        <HeadingStyled>
          <h1>not my taste...</h1>
          <ExitButton />
        </HeadingStyled>
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
                  selectedDate={data.selectedDate}
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
                  selectedDate={data.selectedDate}
                  handleDelete={() => handleDelete(data.id)}
                />
              </li>
            ))}
          </ListStyle>
        )}
      </main>
    </UnLikedFoodPageStyled>
  );
}

const UnLikedFoodPageStyled = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: fit-content 1fr 3rem;

  main {
    margin-top: 6rem;
    grid-row: 2 / 3;
    min-height: 100vh;
    background-color: var(--peach);
  }

  p {
    margin-top: 1rem;
    padding: 1rem 1.5rem 0 1.5rem;
  }
`;

const Header = styled.header`
  background-color: var(--lightsteel);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  border-bottom: 2px solid var(--steelblue);
  box-shadow: var(--box-shadow-header-drop);
  grid-row: 1 / 2;
  display: grid;
  grid-template-rows: fit-content fit-content;

  h1 {
    width: 100%;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    background-color: var(--lightsteel);
    align-self: center;
    color: var(--black);
    letter-spacing: 1px;
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
  margin-top: 1.5rem;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 1.5rem;
  justify-content: center;
`;
