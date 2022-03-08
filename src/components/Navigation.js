import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import iconthumbup from '../images/icon_Thumbup.svg';
import iconthumbdown from '../images/icon_Thumbdown.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavButton to="/">
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
  border: 2px solid var(--black);
  min-height: 50px;
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: ${'var(--steelblue)'};
  }
`;
