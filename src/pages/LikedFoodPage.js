import styled from 'styled-components';
import { useState } from 'react';
import Card from '../components/Card.js';
import ExitButton from '../components/ExitButton.js';
import { SortButtonStyled } from '../components/SortButtonStyled.js';

export default function LikedFoodPage({ storageData, handleDelete }) {
  const likedData = storageData.filter(data => data.foodJudge === 'liked');

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
      <Header>
        <div>
          <h1>I really like to eat...</h1>
          <ExitButton />
        </div>
        <section>
          <span>Du kannst sortieren nach...</span>
          <div>
            <SortButtonStyled
              type="button"
              onClick={() => setSortValue('foodName')}
            >
              Marke
            </SortButtonStyled>
            <SortButtonStyled
              type="button"
              onClick={() => setSortValue('foodTaste')}
            >
              Sorte
            </SortButtonStyled>
            <SortButtonStyled
              type="button"
              onClick={() => setSortValue('foodStyle')}
            >
              Zubereitung
            </SortButtonStyled>
            <SortButtonStyled
              type="button"
              style={{ color: 'var(--coral)' }}
              onClick={() => setSortValue('')}
            >
              rückgängig
            </SortButtonStyled>
          </div>
        </section>
      </Header>
      <main>
        {likedData.length === 0 && (
          <p>
            Du hast hier noch keine Listeneinträge. <br />
            Listeneinträge erscheinen, wenn das Formular ausgefüllt und
            gespeichert wird.
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
                  foodJudge={data.foodJudge}
                  selectedDate={data.selectedDate}
                  handleDelete={() => handleDelete(data.id)}
                />
              </li>
            ))}
          </ListStyle>
        )}
      </main>
    </LikedFoodPageStyle>
  );
}

const LikedFoodPageStyle = styled.section`
  display: grid;
  grid-template-rows: 8.5rem 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
  }

  p {
    margin-top: 2rem;
    padding: 1rem;
  }
`;

const Header = styled.header`
  background-color: var(--lightsteel);
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  border-bottom: 2px solid var(--steelblue);
  box-shadow: var(--box-shadow-header-drop);
  grid-row: 1 / 2;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    width: 100%;
    font-size: 1.1rem;
    color: var(--black);
    letter-spacing: 1px;
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
      padding: 4px 0;
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
  gap: 1.5rem;
  justify-content: center;
`;
