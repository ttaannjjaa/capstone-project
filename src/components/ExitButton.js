import { ExitButtonStyled } from './ButtonIconStyles.js';
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
