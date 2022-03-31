import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import catPictureBackground from '../images/backgroundimg.png';
import iconheartblack from '../images/icon_heartfilled_black.svg';
import iconheartwhite from '../images/icon_heartfilled_white.svg';
import iconcrossmarkred from '../images/icon_crossmark_red.svg';
import { ReactComponent as Headlinestyled } from '../images/headingCatyummyStyled.svg';

export default function LandingPage() {
  const navigate = useNavigate();
  const [mouseOnHover, setMouseOnHover] = useState(false);

  function handleMouseHover() {
    setMouseOnHover(true);
  }
  function handleMouseLeave() {
    setMouseOnHover(false);
  }

  return (
    <StyledLandingPage>
      <h1>
        <span className="sr-only">CATYUMMY</span>
        <Headlinestyled width="310px" height="150px" />
      </h1>
      <StartNavigation>
        <StartButton onClick={() => navigate('/formpage', { replace: true })}>
          CAT FOOD RATING
        </StartButton>
        <StartButton
          onClick={() => navigate('/likedfoodpage', { replace: true })}
          onMouseEnter={() => handleMouseHover()}
          onMouseLeave={() => handleMouseLeave()}
        >
          CAT FOOD
          {mouseOnHover ? (
            <ImgIcon
              src={iconheartblack}
              alt="icon black heart"
              width="14px"
              height="14px"
            />
          ) : (
            <ImgIcon
              src={iconheartwhite}
              alt="icon white heart"
              width="14px"
              height="14px"
            />
          )}
        </StartButton>
        <StartButton
          onClick={() => navigate('/unlikedfoodpage', { replace: true })}
        >
          CAT FOOD
          <ImgIcon
            src={iconcrossmarkred}
            alt="icon red crossmark"
            width="14px"
            height="14px"
          />
        </StartButton>
      </StartNavigation>
    </StyledLandingPage>
  );
}

const StyledLandingPage = styled.main`
  height: 100vh;
  min-height: 650px;
  min-width: 300px;
  background-image: url(${catPictureBackground});
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  @media (orientation: landscape) {
    grid-template-rows: 180px 180px 1fr;
  }

  h1 {
    margin-top: 4rem;
    @media (orientation: landscape) {
      margin-top: 1rem;
    }
  }
`;

const StartNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  @media (orientation: landscape) {
    gap: 20px;
  }
`;

const ImgIcon = styled.img`
  margin-left: 6px;
`;

const StartButton = styled.button`
  background-color: var(--steelblue);
  color: var(--white);
  height: 40px;
  width: 250px;
  border: 2px solid var(--steelblue);
  border-radius: 10px;
  box-shadow: var(--box-shadow-inset);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: var(--lightsteel);
    color: var(--black);
    border: 1px var(--coral) solid;
    cursor: pointer;
  }
  &:active {
    opacity: 0.9;
    border: 2px solid var(--steelblue);
  }
`;
