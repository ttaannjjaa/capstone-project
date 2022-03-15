import styled from 'styled-components';
import iconSearch from '../images/icon_magnifying-glass.svg';

export default function Searchbar() {
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
      />
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.section`
  display: flex;
  flex-direction: column;
  //border: 1px solid var(--steelblue);
  background-color: var(--peach);
  box-shadow: var(--box-shadow-drop);

  div {
    //border: 1px solid yellowgreen;
    display: flex;
    align-items: center;
  }

  label {
    font-size: 1rem;
    padding-bottom: 5px;
    //border: 1px black solid;
  }

  img {
    //border: 1px hotpink solid;
    align-self: flex-start;
    margin-right: 3px;
  }

  input {
    border-radius: 10px;
    min-width: 280px;
    width: 95%;
    font-size: 1rem;
    line-height: 1.2rem;
    padding: 2px 2px 2px 4px;
    box-shadow: var(--box-shadow-drop);
  }
`;
