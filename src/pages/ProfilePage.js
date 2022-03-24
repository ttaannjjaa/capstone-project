import axios from 'axios';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { useState } from 'react';
import ExitButton from '../components/ExitButton.js';
import iconbin from '../images/icon_bin.svg';
import iconpencil from '../images/icon_pencil.svg';
import iconrotate from '../images/icon_rotate.svg';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ProfilePage() {
  const [image, setImage] = useLocalStorage('Bild', '');

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }
  console.log(image);
  function onImageRemove() {
    setImage('');
  }

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

  const [note, setStorageNote] = useLocalStorage('note', '...');

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
        <h1>Mein Katzenprofil</h1>
        <ExitButton />
      </Header>
      <main>
        <ImgContainer min-width="280px" min-height="165px">
          <img src={image} alt="" width="280px" height="165px" />
          <RemoveButton onClick={onImageRemove} data-testid="buttonRemove">
            <span className="sr-only">Image remove button</span>
            <img src={iconbin} alt="icon rotate arrow to the left" />
          </RemoveButton>
          <input
            data-testid="inputImgUpload"
            id="imgUpload"
            type="file"
            onChange={upload}
            hidden
          />
          <UploadButton htmlFor="imgUpload" data-testid="inputLabelImgUpload">
            <span className="sr-only">Image upload and change</span>
            <img src={iconrotate} alt="bin icon" />
          </UploadButton>
        </ImgContainer>

        <FormContainer>
          <div>
            <img src={iconpencil} width="20px" height="20px" alt="pen" />
            <InputTextStyled
              data-testid="inputCatName"
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
              data-testid="inputPetName"
              value={editingCutieNameValue}
              onChange={event => setEditingCutieNameValue(event.target.value)}
              onKeyDown={onKeyDown}
              onBlur={onBlurCutieName}
              maxLength={30}
            />
            <label htmlFor="petName" className="sr-only">
              Kosename der Katze
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
                pattern={/^[0-9]{1,2}$/}
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

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  position: relative;

  img {
    margin-bottom: 1rem;
    border-radius: 5px;
  }
`;

const UploadButton = styled.label`
  width: 30px;
  height: 30px;
  padding: 4px;
  background-color: transparent;
  box-shadow: var(--box-shadow-inset);
  border-radius: 10px;
  position: absolute;
  bottom: 14px;
  right: 0;
`;

const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 4px;
  background-color: transparent;
  box-shadow: var(--box-shadow-inset);
  border-radius: 10px;
  position: absolute;
  bottom: 14px;
  left: 0;
  border: none;

  & > img {
    z-index: 2;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2rem;

  img {
    margin-right: 15px;
  }
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
  &:hover {
    cursor: pointer;
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
