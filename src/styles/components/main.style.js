import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100px;
  flex-shrink: 0;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 2px 4px black;
  background-color: var(--bg2);

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    width: 85%;
    height: 100px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    justify-content: center;
  }
`;

export const InnerBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    border: 2px solid var(--bd);
  }
`;

export const InnerBodyContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 30%;
  height: 300px;
  border-radius: 10px;
  padding: 20px;

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    width: 90%;
    border: 2px solid var(--bd);
    border-radius: 10px;
    margin: 10px auto;
    height: 350px;
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
    opacity: 0.5;
    color: black;
    background-color: transparent;
    box-shadow: none;
    border: none;
    transform: scale(1);
    transition: opacity 0.3s ease-in, color 0.5s ease-in, background-color 0.7s ease-in, box-shadow 0.8s ease-in, border 1s ease-in, transform 1.2s ease-in;

    &:hover {
      transform: scale(1.1);
      color: #7c7b7c;
      box-shadow: 6px 5px rgba(0,0,0,0.7);
      opacity: 1;
      background-color: var(--bg2);
      border: 1px solid black;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  color: var(--fg);
`;

export const SubTitle = styled.h2`
  font-family: "Inkfree", cursive;
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
`;

export const BodyLabel = styled.span`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  color: var(--fg);
  text-decoration: underline;
  margin-bottom: 10px;

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const BodyText = styled.p`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--fg);
  text-align: center;

@media only screen and (max-width: 480px),
                       (max-width: 768px) {
  width: 100%;
  font-size: 1rem;
  text-align: center;
}
`;

export const NavLink = styled(Link)`
  font-family: "Inkfree", cursive;
  font-style: italic;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 10px;
  width: 45%;
  background-color: var(--fg);
  text-align: center;
  color: black;
  border: 2px solid var(--bd);

  @media only screen and (min-width: 1024px) {
    opacity: 0.7;
    color: black;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    width: 100px;
    border: none;
    transform: scale(1);
    font-weight: normal;
    transition: 
      opacity 0.3s ease-in, 
      color 0.4s ease-in, 
      background-color 0.5s ease-in, 
      box-shadow 0.6s ease-in, 
      padding 0.7s ease-in, 
      width 0.8s ease-in, 
      border 0.9s ease-in, 
      transform 1s ease-in, 
      font-weight 1.1s ease-in;

    &:hover {
      opacity: 1;
      color: #7c7b7c;
      background-color: var(--bg2);
      box-shadow: 6px 5px rgba(0,0,0,0.7);
      padding: 10px 15px;
      width: 200px;
      border: 1px solid black;
      transform: scale(1.1);
      font-weight: bold;
      border: none;
    }
  }
`;
