import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inkfree";
    src: url(../../public/fonts/Inkfree.ttf);
  }

  :root {
    --bg: #141619;
    --bg2: #050A44;
    --bd: #2C2E3A;
    --btn-hover: #0A21C0;
    --fg: #B3B4BD;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
