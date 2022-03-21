import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import catPictureBackground from '../images/cat_pic_450_700.svg';
import headline_styled from '../images/heading_CATYUMMY_styled.svg';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <StyledLandingPage>
      <h1>
        <span className="sr-only">CATYUMMY</span>
        <img
          src={headline_styled}
          alt="headline CATYUMMY"
          width="310px"
          height="150px"
        />
      </h1>
      <StartNavigation>
        <StartButton onClick={() => navigate('/FormPage', { replace: true })}>
          Katzenfutter bewerten
        </StartButton>
        <StartButton
          onClick={() => navigate('/UnLikedFoodPage', { replace: true })}
        >
          Liste Katzenfutter ❌
        </StartButton>
        <StartButton
          onClick={() => navigate('/LikedFoodPage', { replace: true })}
        >
          Liste Katzenfutter ♥️
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
`;