import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --white: #FFFFFF;
    --gray1: #EEEEEE;
    --gray2: #717171;
  }
`;
