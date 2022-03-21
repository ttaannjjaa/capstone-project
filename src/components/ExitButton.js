import styled from 'styled-components';
import exitCat from '../images/black_cat_with_door.svg';
import { useNavigate } from 'react-router-dom';

export default function ExitButton() {
  const navigate = useNavigate();

  return (
    <ExitButtonStyled
      onClick={() => navigate('/')}
      aria-describedby="button to leave the app"
      data-testid="button to leave the app"
    >
      <img
        src={exitCat}
        alt="black cat wanting to walk through open door - icon for leaving the app"
        width="72px"
        height="45px"
      />
    </ExitButtonStyled>
  );
}

const ExitButtonStyled = styled.button`
  text-decoration: none;
  border: none;
  background-color: var(--peach);
`;
