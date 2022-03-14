import styled from 'styled-components';
import Card from '../components/Card.js';
import Navigation from '../components/Navigation.js';

export default function LikedFoodPage({ storageData }) {
  const filteredLikedData = storageData?.filter(
    data => data.foodJudge === 'liked'
  );
  return (
    <LikedFoodPageStyle>
      <Header>
        <h1>Mir schmeckt...</h1>
      </Header>
      <main>
        {filteredLikedData.length === 0 ? (
          <p>
            Du hast hier noch keine Listeneinträge. Listeneinträge erscheinen,
            wenn das Formular ausgefüllt und gespeichert wird.
          </p>
        ) : (
          <ListStyle
            role="list"
            data-testid="likedlist"
            aria-describedby={'list of cards about catfood that your cat like'}
          >
            {filteredLikedData.map((data, index) => (
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
    </LikedFoodPageStyle>
  );
}

const LikedFoodPageStyle = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: 15vmin 1fr 50px;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
  }

  p {
    padding: 1.2rem;
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
    font-weight: normal;
  }
`;

const ListStyle = styled.ul`
  margin-top: 10vmin;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 10px;
  justify-content: center;
`;
