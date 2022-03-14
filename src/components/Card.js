import styled from 'styled-components';

export default function Card({ foodName, foodTaste, foodJudge, foodStyle }) {
  return (
    <CardStyle role="listbox">
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles*/}
      <ul
        role="list"
        data-testid="cardcontent list"
        aria-describedby="list of catfood properties"
      >
        <li>Marke: {foodName}</li>
        <li>Sorte: {foodTaste}</li>
        <li>Zubereitung: {foodStyle}</li>
        <li>Bewertung: {foodJudge === 'liked' ? 'lecker' : 'mag ich nicht'}</li>
      </ul>
    </CardStyle>
  );
}

const CardStyle = styled.article`
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: var(--box-shadow-drop);
  padding: 1rem;
  min-width: 280px;
  //width: 96%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
    padding-left: 5px;
  }
`;
