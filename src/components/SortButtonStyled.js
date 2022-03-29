import styled from 'styled-components';

export const SortButtonStyled = styled.button`
  width: fit-content;
  max-height: 2rem;
  padding: 5px;
  background-color: var(--steelblue);
  color: var(--white);
  border-radius: 5px;
  border: 1px var(--coral) dotted;
  box-shadow: var(--box-shadow-inset);
  margin-right: 10px;
  flex-wrap: nowrap;
  :hover {
    background-color: var(--lightsteel);
    color: var(--black);
    border: 1px var(--coral) solid;
  }
  &:active {
    opacity: 0.9;
    border: 2px solid var(--steelblue);
  }
`;
