import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  background-color: var(--bg2);
`;

export const FooterText = styled.p`
  font-family: "Inkfree", cursive;
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
  padding: 0;
  transition: font-size 0.5s ease-in, padding 0.7s ease-in, font-weight 1s ease-in;

  &:hover {
    font-size: 1.2rem;
    padding: 1rem;
    font-weight: bold;
  }
`;
