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
        maxLength="22"
        value={userInput}
        onChange={handleUserInput}
        pattern="^[a-zA-Z]+"
      />
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.section`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: flex-start;
    padding-bottom: 4px;
  }

  label {
    font-size: 1rem !important;
    font-weight: bold;
    color: var(--steelblue);
  }

  img {
    align-self: flex-start;
    margin-right: 3px;
  }

  input {
    min-width: 280px;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 5px;
    border: none;
    padding: 3px 3px 3px 4px;
    margin-bottom: 12px;
    box-shadow: 3px 2px 0px 2px rgba(89, 122, 145, 0.44);
    &:focus {
      outline: 1px solid var(--steelblue);
    }
  }
`;
