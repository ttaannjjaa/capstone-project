import axios from 'axios';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ExitButton from '../components/ExitButton.js';
import coralcatright from '../images/coral_cat_head_right.svg';
import iconarrowright from '../images/icon_arrow_right_circle_fill.svg';
import iconbin from '../images/icon_bin.svg';
import iconpencil from '../images/icon_pencil.svg';
import iconrotate from '../images/icon_rotate.svg';
import imageUploadInfo from '../images/imageUploadInfo.svg';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ProfilePage() {
  const navigate = useNavigate();
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

  function onImageRemove() {
    setImage('');
  }
  const [storedProfileData, setStoredProfileData] = useLocalStorage(
    'profileData',
    {}
  );

  const [profileData, setProfileData] = useState({
    profileName: storedProfileData?.profileName
      ? storedProfileData.profileName
      : 'Garfield',
    profilePetName: storedProfileData?.profilePetName
      ? storedProfileData.profilePetName
      : 'cutie',
    profileAge: storedProfileData?.profileAge
      ? storedProfileData.profileAge
      : '0',
    profileNote: storedProfileData?.profileNote
      ? storedProfileData.profileNote
      : ' ',
  });

  const onKeyDownName = event => {
    event.key === 'Enter'
      ? setStoredProfileData({
          ...storedProfileData,
          profileName: event.target.value,
        })
      : setStoredProfileData(profileData);
  };

  const onKeyDownPetName = event => {
    event.key === 'Enter'
      ? setStoredProfileData({
          ...storedProfileData,
          profilePetName: event.target.value,
        })
      : setStoredProfileData(profileData);
  };

  const onKeyDownAge = event => {
    event.key === 'Enter'
      ? setStoredProfileData({
          ...storedProfileData,
          profileAge: event.target.value,
        })
      : setStoredProfileData(profileData);
  };

  const onKeyDownNote = event => {
    event.key === 'Enter'
      ? setStoredProfileData({
          ...storedProfileData,
          profileNote: event.target.value.trim(),
        })
      : setStoredProfileData(profileData);
  };

  return (
    <FormPageStyle>
      <Header>
        <h1>CAT PROFILE</h1>
        <ExitButton />
      </Header>
      <main>
        <ImgContainer min-width="280px" min-height="165px">
          {image ? (
            <UploadedImg
              data-testid="inputImgUpload"
              src={image}
              alt=""
              width="280px"
              height="165px"
            />
          ) : (
            <DefaultImg
              src={imageUploadInfo}
              alt="photoupload by clicking button with curved arrow right-hand-side, removing it by clicking the button with the bin on the left"
              width="280px"
              height="130px"
            />
          )}
          <RemoveButton onClick={onImageRemove} data-testid="buttonRemove">
            <span className="sr-only">Image remove button</span>
            <img src={iconbin} alt="icon rotate arrow to the left" />
          </RemoveButton>
          <input
            data-testid="inputImgUpload"
            id="imgUpload"
            type="file"
            accept="image/*"
            onChange={event => {
              upload(event);
            }}
            hidden
          />
          <UploadButton htmlFor="imgUpload" data-testid="inputLabelImgUpload">
            <span className="sr-only">Image upload and change</span>
            <img src={iconrotate} alt="bin icon" />
          </UploadButton>
        </ImgContainer>

        <FormContainer title="after editing press enter">
          <div>
            <IconPencil
              src={iconpencil}
              width="20px"
              height="20px"
              alt="pen"
              title="after editing press enter"
            />
            <InputTextStyled
              id="profileName"
              data-testid="inputCatName"
              type="text"
              maxLength="25"
              pattern={/^[A-Za-z ]+$/}
              value={profileData.profileName}
              onChange={event =>
                setProfileData({
                  ...profileData,
                  profileName: event.target.value,
                })
              }
              onKeyDown={onKeyDownName}
            />
            <label className="sr-only" htmlFor="profileName">
              cat name
            </label>
          </div>
          <div>
            <IconPencil
              src={iconpencil}
              width="20px"
              height="20px"
              alt="pen"
              title="after editing press enter"
            />
            <InputTextStyled
              id="profilePetName"
              data-testid="inputPetName"
              type="text"
              maxLength="25"
              pattern={/^[A-Za-z ]+$/}
              value={profileData.profilePetName}
              onChange={event =>
                setProfileData({
                  ...profileData,
                  profilePetName: event.target.value,
                })
              }
              onKeyDown={onKeyDownPetName}
            />
            <label htmlFor="profilePetName" className="sr-only">
              petname
            </label>
          </div>
          <div>
            <IconPencil
              src={iconpencil}
              width="20px"
              height="20px"
              alt="pen"
              title="after editing press enter"
            />
            <LabelAgeStyled htmlFor="profileAge">
              <InputAgeStyled
                id="profileAge"
                data-testid="inputAge"
                type="number"
                maxLength="25"
                min="0"
                max="30"
                pattern={/^[0-9{1,2}]+$/}
                value={profileData.profileAge}
                onChange={event =>
                  setProfileData({
                    ...profileData,
                    profileAge: event.target.value.trim(),
                  })
                }
                onKeyDown={onKeyDownAge}
              />
              years
            </LabelAgeStyled>
          </div>
          <NoteContainer>
            <div>
              <IconPencil
                src={iconpencil}
                width="20px"
                height="20px"
                alt="pen"
                title="after editing press enter"
              />
              <label htmlFor="note">Note </label>
            </div>
            <textarea
              id="note"
              type="text"
              rows="8"
              value={profileData.profileNote}
              onChange={event =>
                setProfileData({
                  ...profileData,
                  profileNote: event.target.value,
                })
              }
              onKeyDown={onKeyDownNote}
            />
            <CatInfoPageButton
              onClick={() => navigate('/catinfopage', { replace: true })}
            >
              <span>cat breeds</span>
              <IconCatCoralRight
                src={coralcatright}
                alt="little cat looking to the right"
                width="28"
                height="28"
              />
              <IconArrowRight
                src={iconarrowright}
                alt="arrow icon showing to the right"
              />
            </CatInfoPageButton>
          </NoteContainer>
        </FormContainer>
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
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid var(--steelblue);

  h1 {
    width: 100%;
    font-size: 1.1rem;
    text-overflow: ellipsis;
    color: var(--black);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  position: relative;
`;

const UploadedImg = styled.img`
  margin-bottom: 1rem;
  border-radius: 5px;
`;

const DefaultImg = styled.img`
  margin-bottom: 3rem;
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
  &:hover {
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
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
  &:hover {
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  & > img {
    z-index: 2;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2rem;
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
  max-width: 50px;
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
  position: relative;
  div {
    margin: 10px 0 5px 0;
  }

  textarea {
    width: 100%;

    background-color: var(--peach);
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-family: inherit;
    font-size: 0.9rem;
    text-overflow: ellipsis;
    &:focus {
      outline: 1px solid var(--coral);
    }
  }
`;

const CatInfoPageButton = styled.button`
  padding: 2px;
  font-size: 0.8rem;
  border-radius: 10px;
  border: none;
  text-decoration: none;
  background-color: var(--white);
  position: absolute;
  right: -4px;
  top: 0px;
  &:hover {
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const IconPencil = styled.img`
  margin-right: 12px;
`;

const IconArrowRight = styled.img`
  margin-right: 2px;
`;

const IconCatCoralRight = styled.img`
  margin-right: 2px;
`;
