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
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;
`;

export const InnerBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const InnerBodyContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 30%;
  height: 300px;
  border-radius: 10px;
  box-shadow: none;
  padding: 20px;
  color: black;
  transform: scale(1);
  opacity: 0.2;
  background-color: transparent;
  border: none;
  transition: opacity 0.3s ease-in, color 0.5s ease-in, background-color 0.7s ease-in, box-shadow 0.8s ease-in, border 1s ease-in, transform 1.2s ease-in;

  &:hover {
    transform: scale(1.1);
    color: #7c7b7c;
    box-shadow: 6px 5px rgba(0,0,0,0.7);
    opacity: 1;
    background-color: var(--bg2);
    border: 1px solid black;
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
  text-decoration: underline;
  margin-bottom: 10px;
`;

export const BodyText = styled.p`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;
  text-align: center;
`;

export const NavLink = styled(Link)`
  font-family: "Inkfree", cursive;
  font-weight: normal;
  font-style: italic;
  font-size: 1.2rem;
  border-radius: 10px;
  box-shadow: none;
  padding: 20px;
  color: black;
  transform: scale(1);
  opacity: 0.7;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 100px;
  text-align: center;
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
  }
`;
