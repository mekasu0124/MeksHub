import styled from "styled-components";
import { Link } from "react-router-dom";

// primary container
export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
`;

// title container
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 2px solid black;

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 1024px),
                         (max-width: 1200px) {}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 80%;
  padding: 10px;
`;

export const InnerTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 20%;
  padding: 10px;
`;

export const Title = styled.h1`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  color: var(--fg);
`;

export const SubTitle = styled.h3`
  font-family: "Inkfree", cursive;
  font-weight: normal;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--fg);
`;

export const Img = styled.img`
  width: 150px;
  height: 80px;
  border-radius: 10px;
`;


// body container
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 2px solid black;

  @media only screen and (max-width: 480px),
                         (max-width: 768px),
                         (max-width: 1024px),
                         (max-width: 1200px) {}
`;

export const InnerLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 50%;
  padding: 10px;

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 1024px), 
                         (max-width: 1200px) {}
`;

export const InnerRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 50%;
  padding: 10px;

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 768px), 
                         (max-width: 1024px), 
                         (max-width: 1200px) {}
`;

export const NavLink = styled(Link)`
  font-family: "Inkfree", cursive;
  font-weight: normal;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--fg);
  margin-left: 20px;
  margin-right: 20px;
  text-decoration: none;
  transition: font-size 0.3s ease-in, font-weight 0.4s ease-in, text-decoration 0.5s ease-in;

  &:hover {
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: underline;
  }

  @media only screen and (max-width: 480px),
                         (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 1024px), (max-width: 1200px) {}
`;
