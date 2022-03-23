import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { useState } from 'react';
import ExitButton from '../components/ExitButton.js';
import iconpencil from '../images/icon_pencil.svg';
import katercarlo from '../images/katercarlo.jpg';

export default function ProfilePage() {
  const [catName, setCatName] = useLocalStorage('catName', 'Katzenname');
  const [editingNameValue, setEditingNameValue] = useState(catName);

  const onBlurName = event => {
    if (event.target.value.trim() === '') {
      setEditingNameValue(catName);
    } else {
      setCatName(event.target.value);
    }
  };

  const [catCutieName, setStorageCatCutieName] = useLocalStorage(
    'cutieCatName',
    'Kosename'
  );
  const [editingCutieNameValue, setEditingCutieNameValue] =
    useState(catCutieName);

  const onBlurCutieName = event => {
    if (event.target.value.trim() === '') {
      setEditingCutieNameValue(catCutieName);
    } else {
      setStorageCatCutieName(event.target.value);
    }
  };

  const [catAge, setStorageCatAge] = useLocalStorage('catAge', 0);

  const [editingCatAgeValue, setEditingCatAgeValue] = useState(catAge);

  const onBlurCatAge = event => {
    if (event.target.value.trim() === '') {
      setEditingCutieNameValue(catAge);
    } else {
      setStorageCatAge(event.target.value);
    }
  };

  const [note, setStorageNote] = useLocalStorage('note', '');

  const [editingNoteValue, setEditingNoteValue] = useState(note);

  const onBlurNote = event => {
    if (event.target.value.trim() === '') {
      setEditingNoteValue(note);
    } else {
      setStorageNote(event.target.value);
    }
  };

  const onKeyDown = event => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur();
    }
  };

  return (
    <FormPageStyle>
      <Header>
        <h1 className="sr-only">Profilseite</h1>
        <ExitButton />
      </Header>
      <main>
        <figure>
          <img src={katercarlo} alt="word YUMMY" width="280px" height="165px" />
        </figure>
        <UploadButton>neues Bild laden</UploadButton>

        <FormContainer>
          <div>
            <img src={iconpencil} width="20px" height="20px" alt="pen" />
            <InputTextStyled
              type="text"
              id="catname"
              value={editingNameValue}
              onChange={event => setEditingNameValue(event.target.value)}
              onKeyDown={onKeyDown}
              onBlur={onBlurName}
              maxLength={30}
            />
            <label className="sr-only" htmlFor="catname">
              Katzenname
            </label>
          </div>
          <div>
            <img src={iconpencil} width="20px" height="20px" alt="pen" />
            <InputTextStyled
              type="text"
              id="petname"
              value={editingCutieNameValue}
              onChange={event => setEditingCutieNameValue(event.target.value)}
              onKeyDown={onKeyDown}
              onBlur={onBlurCutieName}
              maxLength={30}
            />
            <label htmlFor="petName" className="sr-only">
              Kosename des Katze
            </label>
          </div>
          <div>
            <img src={iconpencil} width="20px" height="20px" alt="pen" />
            <LabelAgeStyled htmlFor="catage">
              <InputAgeStyled
                type="text"
                id="catage"
                value={editingCatAgeValue}
                onChange={event => setEditingCatAgeValue(event.target.value)}
                onKeyDown={onKeyDown}
                onBlur={onBlurCatAge}
                maxLength={2}
                pattern="/^[0-9]{1,2}$/"
              />{' '}
              Jahre
            </LabelAgeStyled>
          </div>
          <NoteContainer>
            <div>
              <img src={iconpencil} width="20px" height="20px" alt="pen" />
              <label htmlFor="note">Notiz </label>
            </div>
            <textarea
              type="text"
              id="note"
              value={editingNoteValue}
              onChange={event => setEditingNoteValue(event.target.value)}
              onKeyDown={onKeyDown}
              onBlur={onBlurNote}
              maxLength={300}
              rows="5"
            />
          </NoteContainer>
        </FormContainer>
      </main>
    </FormPageStyle>
  );
}

const FormPageStyle = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-rows: 2.5rem 1fr 3rem;

  main {
    grid-row: 2 / 3;
    min-height: 100vh;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figure {
    margin-bottom: 2rem;
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
  justify-content: flex-end;
  align-items: center;

  h1 {
    width: 100%;
    font-size: 1.2rem;
    color: var(--steelblue);
    letter-spacing: 1px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    margin-right: 15px;
  }
`;

const UploadButton = styled.button`
  min-width: 100px;
  width: 45%;
  padding: 3px;
  margin-bottom: 2rem;
  line-height: 1.5rem;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--steelblue);
  box-shadow: var(--box-shadow-inset);
  border-radius: 10px;
`;

const InputTextStyled = styled.input`
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 8px;
  padding: 5px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
  border: none;
  &:focus {
    outline: 1px solid var(--coral);
  }
`;

const InputAgeStyled = styled.input`
  max-width: 25px;
  border: none;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 8px;
  padding: 5px;
  border-radius: 5px;
  display: inline;
  outline: none;
  &:focus {
    outline: 1px solid var(--coral);
  }
`;

const LabelAgeStyled = styled.label`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 8px;
  padding: 7px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
`;

const NoteContainer = styled.div`
  div {
    margin: 10px 0 5px 0;
  }

  textarea {
    width: 100%;
    background-color: var(--peach);
    border: none;
    border-radius: 5px;
    padding: 3px;
    font-size: 0.9rem;
    &:focus {
      outline: 1px solid var(--coral);
    }
  }
`;
