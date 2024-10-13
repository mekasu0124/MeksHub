import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import api from '../../(hooks)/api';

export default function ValidateEmail() {
  const [userInputEmailCode, setUserInputEmailCode] = useState('');

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');

  const navigate = useNavigate('');
  const location = useLocation();
  const { user } = location.state;

  useEffect(() => {
    const sendVerificationCode = async (email) => {
      try {
        const response = await api.post('/auth/send-verification-code', { email });
  
        if (response.status === 200) {
          setSuccessText(response.data.message);
          setIsSuccess(true);
  
          setTimeout(() => {
            setIsSuccess(false);
            setSuccessText('');
            
            user.emailValid = true;
  
            return navigate('/verify-phone', { state: { user } });
          }, 3000);
        } else {
          setErrorText(response.message);
          setIsError(true);
  
          setTimeout(() => {
            setIsError(false);
            setErrorText('');
            return setUserInputEmailCode('');
          }, 3000);
        }
      } catch (err) {
        setErrorText(err.message);
        setIsError(true);
  
        setTimeout(() => {
          setIsError(false);
          return setUserInputEmailCode('');
        }, 3000);
      }
    };

    if (user && !user.emailValid) {
      sendVerificationCode(user.email);
    }
  }, [navigate, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/verify-email-code', { email: user.email, emailCode: userInputEmailCode });

      if (response.status === 200) {
        updateEmailValidity(user.email);
      } else {
        setErrorText(response.message);
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
          setErrorText('');
          return setUserInputEmailCode('');
        }, 3000);
      }
    } catch (err) {
      setErrorText(err.message);
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        return setErrorText('');
      }, 3000);
    }
  };

  const updateEmailValidity = async (email) => {
    try {
      const response = await api.patch('/auth/update-email-validity', { email });

      if (response.status === 200) {
        setSuccessText(response.data.message);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
          setSuccessText('');
          // left off here.
          // write skeleton code for verifying phone number.
          // start debugging and testing.
          return navigate('/verify-phone', { state: { user } });
        }, 3000);
      } else {
        setErrorText(response.message);
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
          return setUserInputEmailCode('');
        }, 3000);
      };
    } catch (err) {
      setErrorText(err.message);
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        return setUserInputEmailCode('');
      }, 3000);
    };
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[60%] h-24 mt-3 tracking-widest">
        <h1 className="font-inkfree text=[#C6C6C6] text-3xl font-bold italic txtShadow2">
          Let&#39;s Verify Your Email!
        </h1>
      </div>

      <div className="flex flex-col items-center justify-evenly w-full h-full">
        <form className="flex flex-col items-center justify-evenly w-full h-full" onSubmit={handleSubmit}>
          <div className="flex flex-row items-center justify-evenly w-[80%] h-[700px]">
            <label htmlFor="emailCode" className="font-inkfree text-2xl text-[#C6C6C6] tracking-widest">
              Enter The Verification Code Send To Your Email
            </label>
            <input type="text"
                   id="emailCode"
                   name="emailCode"
                   value={userInputEmailCode}
                   onChange={(e) => setUserInputEmailCode(e.target.value)}
                   required
                   className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none" />
          </div>

          {isError && (<p className="text-red-500 text-center text-2xl w-[40%] mt-10">{errorText}</p>)}

          {isSuccess && (<p className="text-green-500 text-center text-2xl w-[40%] mt-10">{successText}</p>)}

          <div className="flex flex-row items-center justify-evenly w-full h-16">
            <button type="button" onClick={() => navigate("/")} className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">
              Back
            </button>
            
            <button type="submit" className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">
              Verify Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
