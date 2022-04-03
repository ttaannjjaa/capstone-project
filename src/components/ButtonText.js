import styled, { css } from 'styled-components';

export default styled.button`
  width: fit-content;
  background-color: var(--steelblue);
  color: var(--white);
  border-radius: 5px;
  box-shadow: var(--box-shadow-inset);

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

  ${props =>
    props.variant === 'sortbutton' &&
    css`
      max-height: 2rem;
      margin-right: 10px;
      padding: 5px;
      border-bottom: 1px var(--coral) solid;
      border-right: 1px var(--coral) solid;
    `};
`;
