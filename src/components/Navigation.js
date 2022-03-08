import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import iconthumbup from '../images/icon_Thumbup.svg';
import iconthumbdown from '../images/icon_Thumbdown.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavButtonThumbup to="/">
        <img src={iconthumbup} alt={'thumbup icon'} />
      </NavButtonThumbup>
      <NavButtonThumbdown to="/UnLikedFoodPage">
        <img src={iconthumbdown} alt={'thumbdown icon'} />
      </NavButtonThumbdown>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.section`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavButtonThumbup = styled(NavLink)`
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

const NavButtonThumbdown = styled(NavLink)`
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
