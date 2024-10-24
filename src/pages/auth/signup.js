import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  SignupContainer,
  TitleContainer,
  Title,
  BodyContainer,
  FormContainer,
  InnerFormContainer,
  InnerFormContainer2,
  FormRow,
  FormLabel,
  FormInput,
  FormInputFile,
  FormButton,
  ErrorLabel,
  SuccessLabel
} from '../../styles/pages/signup.style';

import api from '../../hooks/api';

export default function SignUp() {
  const [newUserData, setNewUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    discordUsername: '',
    phoneNumber: '',
    profileImage: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');

  const navigate = useNavigate('');

  const handleChange = async (e) => {
    if (e.target.name === 'profileImage') {
      setNewUserData({
        ...newUserData,
        profileImage: e.target.files[0],
      });
    } else if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    } else {
      setNewUserData({
        ...newUserData,
        [e.target.name]: e.target.value,
      });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newUserData.password !== confirmPassword) {
      setErrorText("Passwords Do Not Match! Try Again!");
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        setErrorText('');

        setNewUserData({
          ...newUserData,
          password: '',
        });

        return setConfirmPassword('');
      }, 5000);
    }

    try {
      const response = await api.post('/hub/auth/signup', newUserData);

      setSuccessText(response.data.message);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setSuccessText('');
        return navigate('/auth/login');
      }, 3000);
    } catch (err) {
      console.error(err);

      setErrorText(err.response.data.message);
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        setErrorText('');
        return navigate('/auth/login');
      }, 5000);
    };
  };

  return (
    <SignupContainer>
      <TitleContainer>
        <Title>Creating A New Account</Title>
      </TitleContainer>

      <BodyContainer>
        <FormContainer onSubmit={handleSubmit}>
          <InnerFormContainer>
            <InnerFormContainer2>
              <FormRow>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormInput type="text" id="firstName" name="firstName" onChange={handleChange} required />
              </FormRow>
              
              <FormRow>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormInput type="text" id="lastName" name="lastName" onChange={handleChange} required />
              </FormRow>
              
              <FormRow>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput type="email" id="email" name="email" onChange={handleChange} required />
              </FormRow>
              
              <FormRow>
                <FormLabel htmlFor="username">Create Username</FormLabel>
                <FormInput type="text" id="username" name="username" onChange={handleChange} required />
              </FormRow>
              
              <FormRow>
                <FormLabel htmlFor="discordUsername">Discord Username (optional)</FormLabel>
                <FormInput type="text" id="discordUsername" name="discordUsername" onChange={handleChange} />
              </FormRow>
            </InnerFormContainer2>

            <InnerFormContainer2>
              <FormRow>
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <FormInput type="tel" id="phoneNumber" name="phoneNumber" onChange={handleChange} required />
              </FormRow>
              
              <FormRow>
                <FormLabel htmlFor="password">Create Password</FormLabel>
                <FormInput type="text" id="password" name="password" onChange={handleChange} required />
              </FormRow>
              
              <FormRow>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <FormInput type="text" id="confirmPassword" name="confirmPassword" onChange={handleChange} required />
              </FormRow>
              
              <FormRow>
                <FormLabel htmlFor="profileImage">Select Profile Image (optional)</FormLabel>
                <FormInputFile type="file" id="profileImage" name="profileImage" onChange={handleChange} />
              </FormRow>
            </InnerFormContainer2>
          </InnerFormContainer>

          <InnerFormContainer style={{ width: '80%', height: '3.5rem' }}>
            {isError && (<ErrorLabel>{errorText}</ErrorLabel>)}
            {isSuccess && (<SuccessLabel>{successText}</SuccessLabel>)}
          </InnerFormContainer>

          <InnerFormContainer style={{ flexShrink: 0 }}>
            <FormButton type="button" onClick={() => navigate('/')} className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none">Cancel</FormButton>
            <FormButton type="submit" className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none">Create Account</FormButton>
          </InnerFormContainer>
        </FormContainer>
      </BodyContainer>
    </SignupContainer>
  );
};
