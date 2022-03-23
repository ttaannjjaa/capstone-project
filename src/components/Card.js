import styled from 'styled-components';
import DeleteButton from './DeleteButton.js';

export default function Card({
  id,
  foodName,
  foodTaste,
  foodJudge,
  foodStyle,
  selectedDate,
  handleDelete,
}) {
  return (
    <CardStyled role="listbox">
      <DeleteButton handleDelete={handleDelete} id={id} />
      <CardContent
        role="list"
        data-testid="cardcontent list"
        aria-describedby="list of catfood properties"
      >
        <li>
          <span>Marke: </span>
          {foodName}
        </li>
        <li>
          <span>Sorte: </span>
          {foodTaste}
        </li>
        <li>
          <span>Zubereitung: </span>
          {foodStyle}
        </li>
        <li>
          <span>Bewertung: </span>
          {foodJudge === 'liked' ? 'lecker' : 'mag ich nicht'}
        </li>
        <li>
          <span>verfüttert am: </span>
          {selectedDate}
        </li>
      </CardContent>
    </CardStyled>
  );
}

const CardStyled = styled.article`
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: var(--box-shadow-drop);
  min-width: 280px;
  margin: 0 1rem;
  position: relative;

  & {
    --left-border-size: 0.8rem;
    --border-size: 1px;
    padding: 0.8rem;
    padding-left: calc(10px + var(--left-border-size));
    background: linear-gradient(to bottom, #597a91, #cee7f6) 0 0 /
        var(--left-border-size) 100%,
      linear-gradient(#fff, #fff) 0 0 / 100% var(--border-size),
      linear-gradient(#fff, #fff) 0 100% / 100% var(--border-size),
      linear-gradient(#fff, #fff) 100% 0 / var(--border-size) 100%;
    background-repeat: no-repeat;
  }

  span {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--steelblue);
    opacity: 0.9;
  }
`;

const CardContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  padding-left: 5px;
`;
