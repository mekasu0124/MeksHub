import { useState } from 'react';
import { useAuth } from '../../hooks/authContext';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/universal/title';


export default function Login() {
  const [postData, setPostData] = useState({
    username: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate('');

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');

  const handleChange = async (e) => {
    setPostData({
     ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(postData);

      setSuccessText(response);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false)
        setSuccessText('');

        return navigate('/hub/dashboard');
      }, 3000);
    } catch (err) {
      setErrorText(err);
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        setErrorText('');

        return setPostData({
          username: '',
          password: '',
        })
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Title props={{ title: "Login To Get Started!" }} />

      <div classname="flex flex-col items-center justify-center w-full flex-1 mt-5">
        <form className="flex flex-col items-center justify-evenly w-full h-[800px]" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-evenly w-[60%] h-[600px] shadow-black shadow-xl rounded-xl bg-bg2">
            <div className="flex flex-col items-center justify-evenly w-full flex-1">
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="username" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Username</label>
                
                <input type="text"
                      id="username"
                      name="username"
                      value={postData.username}
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl bg-gray-400 border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
              
              <div className="flex flex-row items-center justify-evenly w-[80%]">
                <label htmlFor="password" className="font-inkfree font-bold tracking-widest text-fg text-2xl w-[25%]">Password</label>
                
                <input type="password"
                      id="password"
                      name="password"
                      value={postData.password}
                      onChange={handleChange}
                      required
                      className="font-inkfree text-black text-2xl bg-gray-400 border-black border-2 rounded-full p-2 text-center w-[70%] h-[60px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-14 flex-shrink-0">
              {isError && (<div className="bg-red-950 text-gray-400 text-center rounded-full border-2 border-black w-[20%] p-1">{errorText}</div>)}
              {isSuccess && (<div className="bg-green-950 text-gray-400 text-center rounded-full border-2 border-black w-[20%] p-1">{successText}</div>)}
            </div>

            <div className="flex flex-col items-center justify-center w-full p-2">
              <div className="flex flex-row item-center justify-evenly w-full mb-5">
                <button 
                  type="button" 
                  onClick={() => navigate('/')} 
                  className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2">
                  Cancel
                </button>
                
                <button 
                  type="submit" 
                  className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2">
                  Login
                </button>
              </div>

              <div className="flex flex-row items-center justify-evenly w-full">
                <button 
                  type="button" 
                  onClick={() => navigate('/auth/forgot')} 
                  className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2">
                  Forgot Password
                </button>
                
                <button 
                  type="button" 
                  onClick={() => navigate('/auth/signup')} 
                  className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2">
                  New User
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
