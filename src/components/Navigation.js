import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import iconthumbup from '../images/icon_Thumbup.svg';
import iconthumbdown from '../images/icon_Thumbdown.svg';
import iconform from '../images/icon_form.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavButton to="/">
        <img src={iconform} alt={'thumbdown icon'} width="34px" height="34px" />
      </NavButton>
      <NavButton to="/LikedFoodPage">
        <img
          src={iconthumbup}
          alt={'thumbup icon'}
          width="26px"
          height="26px"
        />
      </NavButton>
      <NavButton to="/UnLikedFoodPage">
        <img
          src={iconthumbdown}
          alt={'thumbdown icon'}
          width="26px"
          height="26px"
        />
      </NavButton>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  display: grid;
  position: fixed;
  bottom: 0;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

const NavButton = styled(NavLink)`
  background-color: var(--peach);
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    border-top: 5px solid ${'var(--coral)'};
  }
`;
