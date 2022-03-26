import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import coralcatleft from '../images/coral_cat_head_left.svg';

export default function CatInfoPage() {
  const navigate = useNavigate();
  const [catData, setCatData] = useState([]);
  const apiKey = process.env.API_KEY;

  useEffect(
    () => {
      axios
        .get('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': apiKey,
          },
        })
        .then(response => {
          return response.data;
        })
        .then(data => {
          console.log(data);
          setCatData(data);
        })
        .catch(error => console.log(error, 'sorry, there is a problem'));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Header>
        <button
          type="button"
          onClick={() => navigate('/ProfilePage', { replace: true })}
        >
          <span className="sr-only">zurück</span>
          <img
            src={coralcatleft}
            alt="cat icon with the head to the left"
            width="28px"
            height="28px"
          />
        </button>
        <h1>Cat Breeds</h1>
      </Header>
      <Main>
        {catData && (
          <UL role="list">
            {catData.map(cat => (
              <li key={cat.id}>
                <CatCard>
                  <CatCardHeading name={cat.name}>{cat.name}</CatCardHeading>
                  {cat.image ? (
                    <CatCardFetchedImage
                      src={cat.image.url}
                      alt=""
                      width="320px"
                      height="250px"
                    />
                  ) : (
                    <CatCardImageErrorMessage>
                      sorry, no image available here
                    </CatCardImageErrorMessage>
                  )}
                  <p origin={cat.origin}>
                    <span>origin: </span>
                    {cat.origin}
                  </p>
                  <p temperament={cat.temperament}>{cat.temperament}</p>
                  <p description={cat.description}>{cat.description}</p>
                </CatCard>
              </li>
            ))}
          </UL>
        )}
        {!catData && (
          <CatDataFetchErrorMessage>
            Sorry, there is a problem. Please try again later.{' '}
          </CatDataFetchErrorMessage>
        )}
      </Main>
    </>
  );
}

const Header = styled.header`
  background-color: var(--lightsteel);
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border-bottom: 2px solid var(--steelblue);
  box-shadow: var(--box-shadow-header-drop);
  position: relative;

  button {
    position: absolute;
    left: 0.5rem;
    top: 12px;
    border: none;
    text-decoration: none;
    background-color: var(--lightsteel);
    &:hover {
      cursor: pointer;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

const Main = styled.main`
  background-color: var(--peach);
  min-height: 100vh;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 1rem;
  list-style: none;
`;

const CatCard = styled.article`
  display: grid;
  grid-template-rows: 30px 1fr 30px fit-content fit-content;
  border: 1px solid yellowgreen;
  justify-content: flex-start;
  padding: 0.5rem;
  list-style: none;
  gap: 0.5rem;
  border-radius: 5px;
  background-color: var(--white);
  border: none;
  box-shadow: var(--box-shadow-drop);

  span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const CatCardHeading = styled.h2`
  justify-self: center;
  line-height: 1.2rem;
  font-size: 1.1rem;
`;

const CatCardFetchedImage = styled.img`
  justify-self: center;
  max-width: 300px;
  max-height: 500px;
  display: block;
`;

const CatCardImageErrorMessage = styled.p`
  padding: 0.5rem;
  color: var(--steelblue);
`;

const CatDataFetchErrorMessage = styled.p`
  padding: 0.5rem;
  color: var(--steelblue);
`;
