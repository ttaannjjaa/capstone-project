import styled from 'styled-components';

export const SortButtonStyled = styled.button`
  width: fit-content;
  max-height: 2rem;
  padding: 5px;
  background-color: var(--steelblue);
  color: var(--white);
  border-radius: 5px;
  border-bottom: 1px var(--coral) solid;
  border-right: 1px var(--coral) solid;
  box-shadow: var(--box-shadow-inset);
  margin-right: 10px;
  flex-wrap: nowrap;
  :hover {
    background-color: var(--lightsteel);
    color: var(--black);
    border: 1px var(--coral) solid;
    cursor: pointer;
  }
  &:active {
    opacity: 0.9;
    border: 1px solid var(--steelblue);
  }
`;
