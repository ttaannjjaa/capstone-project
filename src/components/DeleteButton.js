import styled from 'styled-components';
import icon_bin from '../images/icon_bin.svg';

export default function DeleteButton({ handleDelete, id }) {
  return (
    <DeleteButtonStyled type="button" onClick={handleDelete} id={id}>
      <img src={icon_bin} alt="bin icon" width="13px" height="16px" />
    </DeleteButtonStyled>
  );
}

const DeleteButtonStyled = styled.button`
  text-decoration: none;
  border: none;
  background-color: var(--white);
  height: 25px;
  width: 25px;
  border-radius: 100px;
  position: absolute;
  right: 18px;
  &:hover {
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: var(--peach);
  }
`;
