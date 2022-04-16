import styled from 'styled-components';
import iconpencil from '../images/icon_pencil.svg';

export default function EditButton({ handleEditing, id }) {
  return (
    <EditButtonStyled
      data-testid="button to activate edit function"
      id={id}
      onClick={() => handleEditing()}
    >
      <img src={iconpencil} alt="pencil icon" width="16px" height="16px" />
    </EditButtonStyled>
  );
}

const EditButtonStyled = styled.button`
  text-decoration: none;
  border: none;
  background-color: var(--white);
  height: 25px;
  width: 25px;
  border-radius: 100px;
  position: absolute;
  right: 15px;

  &:hover {
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: var(--peach);
  }
`;
