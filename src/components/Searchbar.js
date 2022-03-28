import styled from 'styled-components';
import iconSearch from '../images/icon_magnifying-glass.svg';

export default function Searchbar({ userInput, handleUserInput }) {
  return (
    <SearchbarContainer>
      <img src={iconSearch} alt="search icon" width="26px" height="26px" />
      <label htmlFor="catfood-search">Search</label>
      <input
        type="search"
        id="catfood-search"
        placeholder="e.g. name of food"
        maxLength="50"
        value={userInput}
        onChange={handleUserInput}
        pattern={/^[a-zA-Z ]+$/}
      />
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.section`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--steelblue);
  padding: 0.5rem 0;
  align-items: center;

  img {
    margin-right: 3px;
    padding-bottom: 6px;
  }

  label {
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--black);
    margin-right: 5px;
    padding-bottom: 6px;
  }

  input {
    max-width: 200px;
    min-width: 100px;
    font-size: 1rem;
    text-overflow: ellipsis;
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
