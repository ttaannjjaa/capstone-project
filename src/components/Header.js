import styled, { css } from 'styled-components';

export default styled.header`
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: var(--lightsteel);
  border-top: 4px solid var(--steelblue);
  border-bottom: 2px solid var(--steelblue);
  box-shadow: var(--box-shadow-header-drop);

  ${props =>
    props.variant === 'catinfopage' &&
    css`
      position: fixed;
      top: 0;
      padding: 0.5rem;
      justify-content: center;
    `}

  ${props =>
    props.variant === 'dislikedfoodpage' &&
    css`
      display: grid;
      grid-template-rows: fit-content fit-content;
    `}

  ${props =>
    props.variant === 'formpage' &&
    css`
      padding: 0.5rem;
      box-shadow: 0 1px 4px 0 rgba(30, 30, 33, 0.3);
      justify-content: space-between;
      align-items: center;
    `}

    ${props =>
    props.variant === 'likedfoodpage' &&
    css`
      padding: 1rem 1rem 0 1rem;
    `}

  ${props =>
    props.variant === 'profilepage' &&
    css`
      padding: 1rem;
      box-shadow: 0 1px 4px 0 rgba(30, 30, 33, 0.3);
      justify-content: flex-end;
      align-items: center;
    `}
`;
