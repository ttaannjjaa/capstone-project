import styled from 'styled-components';
import Form from '../components/Form.js';
import Navigation from '../components/Navigation.js';

export default function FormPage({
  version,
  handleSubmit,
  formData,
  setFormData,
}) {
  return (
    <FormPageStyle>
      <Header>
        <h1>Hier kannst Du eintragen, wie es mir schmeckt...</h1>
      </Header>
      <main>
        <Form
          version={version}
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        ></Form>
      </main>
      <footer>
        <Navigation />
      </footer>
    </FormPageStyle>
  );
}

const FormPageStyle = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: 6vmin 1fr 50px;
  width: 100%;
  position: fixed;
  top: 0;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
    padding-top: 20vmin;
  }
`;

const Header = styled.header`
  background-color: var(--white);
  padding: 5vmin 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(30, 30, 33, 0.3);
  grid-row: 1 / 2;

  h1 {
    width: 100%;
    font-size: 1.2rem !important;
    font-weight: lighter;
  }
`;
