import styled from 'styled-components';

export default function Card() {
  return (
    <CardStyle role={'listbox'}>
      <ul
        data-testid={'cardcontent list'}
        aria-describedby={'list of catfood properties'}
      >
        <li>Marke: Schnurrsatt</li>
        <li>Sorte: Lachs</li>
        <li>Zubereitung: Sauce</li>
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
  width: 96%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
    padding-left: 5px;
  }
`;
