import styled from 'styled-components';
import iconSearch from '../images/icon_magnifying-glass.svg';

export default function Searchbar({ userInput, handleUserInput }) {
  return (
    <SearchbarContainer>
      <div>
        <img src={iconSearch} alt="search icon" width="26px" height="26px" />
        <label htmlFor="catfood-search">Suche</label>
      </div>
      <input
        type="search"
        id="catfood-search"
        placeholder="z.B. Name des Futters"
        maxLength="80"
        value={userInput}
        onChange={handleUserInput}
        pattern="^[a-zA-Z]+$"
      />
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    align-items: flex-start;
    padding: 4px 0;
    width: 100%;
    border-top: 1px solid var(--steelblue);
  }

  label {
    font-size: 1rem;
    font-weight: bold;
    color: var(--steelblue);
  }

  img {
    align-self: flex-start;
    margin-right: 3px;
  }

  input {
    min-width: 300px;
    width: 100%;
    font-size: 1rem;
    text-overflow: ellipsis;
    line-height: 1.5rem;
    border-radius: 5px;
    border: none;
    padding: 3px 3px 3px 4px;
    margin-bottom: 12px;
    box-shadow: 3px 2px 0px 2px rgba(89, 122, 145, 0.44);
    &:focus {
      outline: 1px solid var(--coral);
    }
  }
`;
