import styled from 'styled-components';
import { SortButtonStyled } from './SortButtonStyled.js';

export default function ModalDelete() {
  return (
    <ModalDeleteStyled
      aria-labelledby="dialog1Title"
      aria-describedby="dialog1Desc"
      open
    >
      <h2 id="dialog1Title">Confirmation Delete Requested</h2>
      <p id="dialog1Desc">Do you really want to delete this?</p>
      <ButtonWrapper>
        <SortButtonStyled>⚠️ Yes</SortButtonStyled>
        <SortButtonStyled>No</SortButtonStyled>
      </ButtonWrapper>
    </ModalDeleteStyled>
  );
}

const ModalDeleteStyled = styled.dialog`
  border: 5px solid var(--coral);
  border-radius: 10px;
  background-color: var(--lightsteel);
  opacity: 0.9;
  padding: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin: 0 30px;
    font-size: bold;
    padding: 6px 10px;
  }
`;
