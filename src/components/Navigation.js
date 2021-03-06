import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import iconform from '../images/icon_form.svg';
import iconheartblack from '../images/icon_heartfilled_black.svg';
import iconcrossmarkred from '../images/icon_crossmark_red.svg';
import iconcathead from '../images/icon_cathead.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavButton to="/formpage">
        <img src={iconform} alt={'form icon'} width="32px" height="34px" />
      </NavButton>
      <NavButton to="/likedfoodpage">
        <img
          src={iconheartblack}
          alt={'black heart icon'}
          width="25px"
          height="25px"
        />
      </NavButton>
      <NavButton to="/dislikedfoodpage">
        <img
          src={iconcrossmarkred}
          alt={'icon red crossmark'}
          width="22px"
          height="22px"
        />
      </NavButton>
      <NavButton to="/profilepage">
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
  background-color: var(--lightsteel);
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    border-top: 5px solid ${'var(--coral)'};
    background-color: var(--steelblue);
  }
`;
