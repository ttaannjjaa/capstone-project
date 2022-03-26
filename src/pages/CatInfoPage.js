import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function CatInfoPage() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <button
          type="button"
          onClick={() => navigate('/ProfilePage', { replace: true })}
        >
          zurück
        </button>
      </header>
      <Main></Main>
    </>
  );
}

const Main = styled.main`
  background-color: var(--citrus);
  min-height: 100vh;
`;
