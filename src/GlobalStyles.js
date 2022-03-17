import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* , *::after, *::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
    --black: #000000;
    --white: #ffffff;
    --grey: #7E6F6F; 
    --coral: #F88379;
    --lightblue: #CEE7F6;
    --peach: #F4E0D4; 
    --steelblue: #597A91;  
    --box-shadow-drop: 0px 1px 4px rgba(0, 0, 0, 0.25);
    --box-shadow-inset: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    --box-shadow-header-drop: 0 1px 4px 0 rgba(30, 30, 33, 0.3);
  }


body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  min-height: 100vh;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }


`;

export default GlobalStyles;
