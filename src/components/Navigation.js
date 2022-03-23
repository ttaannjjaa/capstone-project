import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import iconform from '../images/icon_form.svg';
import iconthumbdown from '../images/icon_thumbdown.svg';
import iconthumbup from '../images/icon_thumbup.svg';
import iconcathead from '../images/icon_cathead.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavButton to="/FormPage">
        <img src={iconform} alt={'form icon'} width="32px" height="34px" />
      </NavButton>
      <NavButton to="/LikedFoodPage">
        <img
          src={iconthumbup}
          alt={'thumbup icon'}
          width="25px"
          height="25px"
        />
      </NavButton>
      <NavButton to="/UnLikedFoodPage">
        <img
          src={iconthumbdown}
          alt={'thumbdown icon'}
          width="25px"
          height="25px"
        />
      </NavButton>
      <NavButton to="/ProfilePage">
        <img
          src={iconcathead}
          alt={'cathead icon'}
          width="34px"
          height="34px"
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
