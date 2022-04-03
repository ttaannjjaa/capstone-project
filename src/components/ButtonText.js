import styled, { css } from 'styled-components';

export default styled.button`
  width: fit-content;
  background-color: var(--steelblue);
  color: var(--white);
  border-radius: 10px;
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
    border: 2px solid var(--steelblue);
  }

  ${props =>
    props.variant === 'sortbutton' &&
    css`
      max-height: 2rem;
      margin-right: 10px;
      padding: 5px;
      border-bottom: 1px var(--coral) solid;
      border-right: 1px var(--coral) solid;
    `}

  ${props =>
    props.variant === 'landingpagebutton' &&
    css`
      height: 40px;
      min-width: 250px;
      border: 2px solid var(--steelblue);
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

${props =>
    props.variant === 'savebutton' &&
    css`
      min-width: 280px;
      width: 95%;
      padding: 6px;
      margin-bottom: 1.5rem;
      line-height: 1.5rem;
      font-size: inherit;
      letter-spacing: 1px;
      align-self: center;
      }
    `};
`;
