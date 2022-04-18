import { EditButtonStyled } from './ButtonIconStyles.js';
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
