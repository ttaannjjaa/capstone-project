import { DeleteButtonStyled } from './ButtonIconStyles.js';
import icon_bin from '../images/icon_bin.svg';

export default function DeleteButton({ setVisible, id }) {
  return (
    <DeleteButtonStyled id={id} onClick={() => setVisible(true)}>
      <img src={icon_bin} alt="bin icon" width="13px" height="16px" />
    </DeleteButtonStyled>
  );
}
