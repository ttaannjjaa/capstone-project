import styled from 'styled-components';
import ExitButton from '../components/ExitButton.js';
import Form from '../components/Form.js';
import Header from '../components/Header.js';

export default function FormPage({ handleData }) {
  return (
    <FormPageStyle>
      <HeaderFormPage variant="formpage">
        <h1>CAT FOOD RATING</h1>
        <ExitButton />
      </HeaderFormPage>
      <main>
        <Form handleData={handleData}></Form>
      </main>
    </FormPageStyle>
  );
}

const FormPageStyle = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: fit-content 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
  }

  h1 {
    text-overflow: ellipsis;
  }
`;

const HeaderFormPage = styled(Header)`
  grid-row: 1 / 2;

  h1 {
    width: 100%;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`;
