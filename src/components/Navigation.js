import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import iconthumbup from '../images/icon_Thumbup.svg';
import iconthumbdown from '../images/icon_Thumbdown.svg';
import iconform from '../images/icon_form.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavButton to="/">
        <img src={iconform} alt={'thumbdown icon'} />
      </NavButton>
      <NavButton to="/LikedFoodPage">
        <img src={iconthumbup} alt={'thumbup icon'} />
      </NavButton>
      <NavButton to="/UnLikedFoodPage">
        <img src={iconthumbdown} alt={'thumbdown icon'} />
      </NavButton>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavButton = styled(NavLink)`
  background-color: var(--peach);
  min-height: 50px;
  min-width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: ${'var(--steelblue)'};
  }
`;
