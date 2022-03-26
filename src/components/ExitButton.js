import styled from 'styled-components';
import exitCat from '../images/cat_with_door.svg';
import { useNavigate } from 'react-router-dom';

export default function ExitButton() {
  const navigate = useNavigate();

  return (
    <ExitButtonStyled
      onClick={() => navigate('/')}
      data-testid="button to leave the app"
    >
      <span className="sr-only">ExitButton</span>
      <img
        src={exitCat}
        alt="black cat wanting to walk through open door - icon for leaving the app"
        width="55px"
        height="40px"
      />
    </ExitButtonStyled>
  );
}

const ExitButtonStyled = styled.button`
  text-decoration: none;
  border: none;
  background-color: var(--lightsteel);
  &:hover {
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
