import ButtonIconStyle from './ButtonIconStyles.js';
import {
  DeleteButtonStyled,
  EditButtonStyled,
  ExitButtonStyled,
} from './ButtonIconStyles.js';
import exitCat from '../images/cat_with_door.svg';
import icon_bin from '../images/icon_bin.svg';
import iconpencil from '../images/icon_pencil.svg';

export default {
  title: 'Components/ButtonIconStyles',
  component: ButtonIconStyle,
  subcomponents: { DeleteButtonStyled, EditButtonStyled, ExitButtonStyled },
};

export const DeleteButtonCard = args => (
  <DeleteButtonStyled {...args}>
    <img src={icon_bin} alt="bin icon" />
  </DeleteButtonStyled>
);

export const EditButtonCard = args => (
  <EditButtonStyled {...args}>
    <img src={iconpencil} alt="pencil icon" width="16px" height="16px" />
  </EditButtonStyled>
);

export const ExitButtonApp = args => (
  <ExitButtonStyled {...args}>
    <img {...args} src={exitCat} alt="cat in front of an open door" />
  </ExitButtonStyled>
);
