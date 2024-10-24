import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
  margin-top: 1.25rem;
`;

export const Title = styled.h1`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 1.875rem;
  color: var(--fg);

  @media only screen and (max-width: 480px), (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  margin-top: 1.25rem;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 800px;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    justify-content: center;
  }
`;

export const InnerFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    padding: 10px;
  }
`;

export const InnerFormContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
  height: 600px;
  box-shadow: 6px 5px rgba(0,0,0,0.7);
  border-radius: 0.75rem;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    width: 90%;
    height: 300px;
    overflow-y: auto;
    justify-content: start;
    padding: 5px;
    margin-top: 2rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--fg);
  width: 25%;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
    text-align: center;
  }
`;

export const FormInput = styled.input`
  font-family: "Inkfree", cursive;
  font-size: 1.5rem;
  color: black;
  border: 2px solid var(--bd);
  border-radius: 9999px;
  padding: 0.5rem;
  text-align: center;
  width: 70%;
  height: 60px;
  outline: none;
  background-color: transparent;
  letter-spacing: 0.1em;
  word-spacing: 0.1em;

  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;
  }

  @media only screen and (max-width: 480px), (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
  }
`;

export const FormInputFile = styled.input`
  font-family: "Inkfree", cursive;
  font-size: 1.5rem;
  color: var(--fg);
  border: 2px solid var(--bd);
  border-radius: 9999px;
  padding: 0.5rem;
  padding-left: 1.5rem;
  padding-top: 0.4rem;
  text-align: center;
  width: 70%;
  height: 60px;
  outline: none;
  background-color: transparent;
  letter-spacing: 0.1em;
  word-spacing: 0.1em;

  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;
  }

  @media only screen and (max-width: 480px), (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
    padding-top: 0.8rem;
  }
`;

export const ErrorLabel = styled.div`
  background-color: darkred;
  color: gray;
  text-align: center;
  border-radius: 9999px;
  border: 2px solid black;
  width: 50%;
  font-size: 1.5rem;
  padding: 0.25rem;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    font-size: 1rem;
    margin: 0.3rem auto;
    width: 80%;
  }
`;

export const SuccessLabel = styled.div`
  background-color: darkgreen;
  color: gray;
  text-align: center;
  border-radius: 9999px;
  border: 2px solid black;
  width: 50%;
  font-size: 1.5rem;
  padding: 0.25rem;

  @media only screen and (max-width: 480px), (max-width: 768px) {
    font-size: 1rem;
    margin: 0.3rem auto;
    width: 80%;
  }
`;

export const FormButton = styled.button`
  font-family: "Inkfree", cursive;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  width: 300px;
  height: 60px;
  border: 2px solid black;
  border-radius: 9999px;
  outline: none;

  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;
  }

  @media only screen and (max-width: 480px), (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem auto;
    color: var(--fg);
    border: 2px solid var(--bd);
  }
`;
