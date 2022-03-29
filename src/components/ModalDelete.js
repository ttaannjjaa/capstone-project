import styled from 'styled-components';
import { SortButtonStyled } from './SortButtonStyled.js';

export default function ModalDelete({ onConfirm, onCancel, visible, id }) {
  if (!visible) {
    return null;
  }
  return (
    <ModalDeleteStyled
      aria-labelledby="dialog1Title"
      aria-describedby="dialog1Desc"
    >
      <h2 id="dialog1Title">Confirmation Delete Requested</h2>
      <p id="dialog1Desc">Do you really want to delete this?</p>
      <ButtonWrapper>
        <SortButtonStyled onClick={onConfirm} id={id}>
          ⚠️ Yes
        </SortButtonStyled>
        <SortButtonStyled onClick={onCancel}>No</SortButtonStyled>
      </ButtonWrapper>
    </ModalDeleteStyled>
  );
}

const ModalDeleteStyled = styled.section`
  border: 5px solid var(--coral);
  border-radius: 10px;
  background-color: var(--lightsteel);
  opacity: 0.9;
  padding: 10px;
  display: grid;
  grid-template-rows: fit-content fit-content 1fr;
  place-items: center;

  h2 {
    font-size: 1rem;
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
