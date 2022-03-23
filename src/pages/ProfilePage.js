import styled from 'styled-components';
import ExitButton from '../components/ExitButton.js';

export default function ProfilePage() {
  return (
    <FormPageStyle>
      <Header>
        <h1>Das ist meine Seite</h1>
        <ExitButton />
      </Header>
      <main>
        <form></form>
      </main>
    </FormPageStyle>
  );
}

const FormPageStyle = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: rem 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
  }
`;

const Header = styled.header`
  background-color: var(--peach);
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(30, 30, 33, 0.3);
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;

  h1 {
    width: 100%;
    font-size: 1.2rem;
    color: var(--steelblue);
    letter-spacing: 1px;
  }
`;