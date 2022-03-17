import styled from 'styled-components';
import Card from '../components/Card.js';
import Navigation from '../components/Navigation.js';

export default function LikedFoodPage({ storageData, handleDelete }) {
  const likedData = storageData.filter(data => data.foodJudge === 'liked');
  return (
    <LikedFoodPageStyle>
      <Header>
        <h1>Mir schmeckt...</h1>
      </Header>
      <main>
        {likedData.length === 0 ? (
          <p>
            Du hast hier noch keine Listeneinträge. <br />
            Listeneinträge erscheinen, wenn das Formular ausgefüllt und
            gespeichert wird.
          </p>
        ) : (
          <ListStyle
            role="list"
            data-testid="likedlist"
            aria-describedby={'list of cards about catfood that your cat like'}
          >
            {likedData.map(data => (
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
    </LikedFoodPageStyle>
  );
}

const LikedFoodPageStyle = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: 3.5rem 1fr 3rem;

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
  background-color: var(--peach);
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  box-shadow: var(--box-shadow-header-drop);
  grid-row: 1 / 2;

  h1 {
    width: 100%;
    font-size: 1.2rem;
    color: var(--steelblue);
    letter-spacing: 1px;
  }
`;

const ListStyle = styled.ul`
  margin-top: 2rem;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-rows: 5;
  gap: 1.5rem;
  justify-content: center;
`;
