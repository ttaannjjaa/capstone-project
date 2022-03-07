import styled from 'styled-components';
import Card from './Card.js';

export default function LikedFoodPage() {
  return (
    <LikedFoodPageStyle>
      <Header>
        <h1>Mir schmeckt...</h1>
      </Header>
      <main>
        <ListStyle
          data-testid={'likedlist'}
          aria-describedby={'list of cards about catfood that your cat like'}
        >
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ListStyle>
      </main>
    </LikedFoodPageStyle>
  );
}

const LikedFoodPageStyle = styled.section`
  background-color: var(--peach);
  display: grid;
  grid-template-rows: 10vm 1fr 50px;
  grid-template-columns: 1;

  main {
    grid-row: 2 / 4;
    min-height: 100vh;
  }
`;

const Header = styled.header`
  background-color: var(--white);
  padding: 10vmin 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(30, 30, 33, 0.3);
  grid-row: 1 / 2;
  grid-column: 1/ 2;

  h1 {
    width: 100%;
    font-size: 1.2rem !important;
    font-weight: normal;
  }
`;

const ListStyle = styled.ul`
  margin-top: 30vmin;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 5;
  gap: 10px;
  justify-content: center;
`;
