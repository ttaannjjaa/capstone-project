import styled from 'styled-components';
import ExitButton from '../components/ExitButton.js';
import Form from '../components/Form.js';

export default function FormPage({ handleData }) {
  return (
    <FormPageStyle>
      <Header>
        <h1>CAT FOOD RATING</h1>
        <ExitButton />
      </Header>
      <main>
        <Form handleData={handleData}></Form>
      </main>
    </FormPageStyle>
  );
}

const FormPageStyle = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: 4rem 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
  }

  h1 {
    text-overflow: ellipsis;
  }
`;

const Header = styled.header`
  border-top: 4px solid var(--steelblue);
  background-color: var(--lightsteel);
  padding: 1rem;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(30, 30, 33, 0.3);
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--steelblue);

  h1 {
    width: 100%;
    font-size: 1.1rem;
    color: var(--black);
    letter-spacing: 1px;
  }
`;
