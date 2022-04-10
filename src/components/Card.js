import styled from 'styled-components';
import blackcatheadleft from '../images/black_cat_head_left.svg';
import DeleteButton from './DeleteButton.js';
import ModalDelete from './ModalDelete.js';
import { useState, useEffect } from 'react';

export default function Card({
  id,
  foodName,
  foodTaste,
  foodRating,
  foodStyle,
  selectedDate,
  handleDelete,
}) {
  const [visible, setVisible] = useState(false);
  const [randomNumber, setRandomNumber] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.round(Math.random() * 90));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  console.log(randomNumber);
  return (
    <CardStyled role="listbox">
      {(randomNumber < 31 || randomNumber > 81) && (
        <img
          style={{
            position: 'absolute',
            top: '-30px',
            left: `${randomNumber}%`,
          }}
          src={blackcatheadleft}
          alt="black cat looking to the left"
        />
      )}
      <DeleteButton id={id} setVisible={setVisible} />
      <ModalDelete
        visible={visible}
        onConfirm={handleDelete}
        onCancel={() => setVisible(false)}
        setVisible={setVisible}
      />
      <CardContent
        role="list"
        data-testid="cardcontent list"
        aria-describedby="list of catfood properties"
      >
        <li>
          <span>name: </span>
          {foodName}
        </li>
        <li>
          <span>flavour: </span>
          {foodTaste}
        </li>
        <li>
          <span>preparation: </span>
          {foodStyle}
        </li>
        <li>
          <span>rating: </span>
          {foodRating === 'liked' ? 'liked' : 'disliked'}
        </li>
        <li>
          <span>fed on: </span>
          {selectedDate}
        </li>
      </CardContent>
    </CardStyled>
  );
}

const CardStyled = styled.article`
  background-color: var(--white) !important;
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
