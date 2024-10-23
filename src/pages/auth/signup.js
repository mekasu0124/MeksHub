import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    } else {
      setNewUserData({
        ...newUserData,
        [e.target.name]: e.target.value,
      });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-row justify-start items-center w-full">
        <div className="flex flex-col items-center justify-center w-full flex-shrink-0 mt-5">
          <h1 className="font-inkfree italic text-fg text-3xl tracking-widest">
            Creating A New Account
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full flex-1 mt-5">
        <form className="flex flex-col items-center justify-evenly w-full h-[800px]" onSubmit={handleSubmit}>
          <div className="flex flex-row items-center justify-evenly w-full mb-5">
            <div className="flex flex-col items-center justify-evenly w-[45%] h-[600px] shadow-black shadow-xl rounded-xl">
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="firstName" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">First Name</label>
                
                <input type="text"
                      id="firstName"
                      name="firstName"
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="lastName" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Last Name</label>
                
                <input type="text"
                      id="lastName"
                      name="lastName"
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="email" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Email Address</label>
                
                <input type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="username" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Create Username</label>
                
                <input type="text"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="discordUsername" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Discord Username (optional)</label>
                
                <input type="text"
                      id="discordUsername"
                      name="discordUsername"
                      onChange={handleChange}
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-evenly w-[45%] h-[600px] shadow-black shadow-xl rounded-xl">
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="phoneNumber" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Phone Number</label>
                
                <input type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="password" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Create Password</label>
                
                <input type="text"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="confirmPassword" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Confirm Password</label>
                
                <input type="text"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="profileImage" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Select Profile Image (optional)</label>
                
                <input type="file"
                      id="profileImage"
                      name="profileImage"
                      onChange={handleChange}
                      className="font-inkfree text-black text-2xl border-black border-2 rounded-full p-2 pl-6 pt-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-14">
            {isError && (<div className="bg-red-950 text-gray-400 text-center rounded-full border-2 border-black w-[20%] p-1">{errorText}</div>)}
            {isSuccess && (<div className="bg-green-950 text-gray-400 text-center rounded-full border-2 border-black w-[20%] p-1">{successText}</div>)}
          </div>

          <div className="flex flex-row items-center justify-evenly w-full flex-shrink-0">
            <button type="button" onClick={() => navigate('/')} className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none">Cancel</button>
            <button type="submit" className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};
