import styled from 'styled-components';

const ButtonIconStyle = styled.button`
  text-decoration: none;
  border: none;
  &:hover {
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
export default ButtonIconStyle;

const DeleteButtonStyled = styled(ButtonIconStyle)`
  background-color: var(--white);
  height: 25px;
  width: 25px;
  border-radius: 100px;
  position: absolute;
  bottom: 10px;
  right: 15px;
  &:hover {
    background-color: var(--peach);
  }
`;
export { DeleteButtonStyled };

const EditButtonStyled = styled(ButtonIconStyle)`
  background-color: var(--white);
  height: 25px;
  width: 25px;
  border-radius: 100px;
  position: absolute;
  right: 15px;
  &:hover {
    background-color: var(--peach);
  }
`;
export { EditButtonStyled };

const ExitButtonStyled = styled(ButtonIconStyle)`
  background-color: var(--lightsteel);
`;
export { ExitButtonStyled };
