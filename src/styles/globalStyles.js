import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inkfree";
    src: url(../../public/fonts/Inkfree.ttf);
  }

  :root {
    --bg: #221b18;
    --bg2: #523c2c;
    --bd: #6c6257;
    --btn-hover: #a2784e;
    --fg: #9ca09d;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
