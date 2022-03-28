import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import catPictureBackground from '../images/backgroundimg.png';
import { ReactComponent as Headlinestyled } from '../images/headingCatyummyStyled.svg';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <StyledLandingPage>
      <h1>
        <span className="sr-only">CATYUMMY</span>
        <Headlinestyled width="310px" height="150px" />
      </h1>
      <StartNavigation>
        <StartButton onClick={() => navigate('/FormPage', { replace: true })}>
          CAT FOOD RATING
        </StartButton>{' '}
        <StartButton
          onClick={() => navigate('/LikedFoodPage', { replace: true })}
        >
          CAT FOOD ♥️
        </StartButton>
        <StartButton
          onClick={() => navigate('/UnLikedFoodPage', { replace: true })}
        >
          CAT FOOD ❌
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

const StartButton = styled.button`
  background-color: var(--steelblue);
  color: var(--white);
  height: 40px;
  width: 250px;
  border: 2px solid var(--steelblue);
  border-radius: 10px;
  box-shadow: var(--box-shadow-inset);
  letter-spacing: 1px;
`;
