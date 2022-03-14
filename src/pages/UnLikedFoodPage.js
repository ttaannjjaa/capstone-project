import styled from 'styled-components';
import Card from '../components/Card.js';
import Navigation from '../components/Navigation.js';

export default function UnLikedFoodPage({ storageData }) {
  const filteredUnLikedData = storageData?.filter(
    data => data.foodJudge === 'unliked'
  );

  return (
    <UnLikedFoodPageStyled>
      <Header>
        <h1>Ich futtere lieber etwas anderes als...</h1>
      </Header>
      <main>
        {filteredUnLikedData.length === 0 ? (
          <p>
            Du hast hier noch keine Listeneinträge. Listeneinträge erscheinen,
            wenn das Formular ausgefüllt und gespeichert wird.
          </p>
        ) : (
          <ListStyle
            data-testid="unlikedlist"
            aria-describedby="list of cards about catfood that your cat does not like"
            role="list"
          >
            {filteredUnLikedData.map((data, index) => (
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
