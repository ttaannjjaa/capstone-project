import styled from 'styled-components';
import iconwarning from '../images/icon_warning.svg';
import ButtonText from './ButtonText.js';

export default function ModalDelete({ onConfirm, onCancel, visible, id }) {
  if (!visible) {
    return null;
  }
  return (
    <Background>
      <ModalDeleteStyled aria-describedby="dialog1Desc">
        <h2>Confirmation Requested</h2>
        <Question id="dialog1Desc">Do you really want to delete this?</Question>
        <ButtonWrapper>
          <ButtonText variant="modalbutton" onClick={onConfirm} id={id}>
            <img src={iconwarning} alt="icon warning" width="14" height="14" />{' '}
            Yes
          </ButtonText>
          <ButtonText onClick={onCancel}>No</ButtonText>
        </ButtonWrapper>
      </ModalDeleteStyled>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

const ModalDeleteStyled = styled.section`
  width: 290px;
  border: 5px solid var(--coral);
  border-radius: 10px;
  background-color: var(--lightsteel);
  padding: 10px;
  margin: 30% auto;
  display: grid;
  grid-template-rows: fit-content fit-content 1fr;
  place-items: center;
  z-index: 20;

  h2 {
    padding-top: 5px;
    font-size: 1rem;
    text-decoration: none;
  }
`;

const Question = styled.h3`
  font-size: 0.8rem;
  margin: 0.5rem 0 1rem 0;
  white-space: no-wrap;
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
