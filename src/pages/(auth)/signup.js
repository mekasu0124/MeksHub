import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../(hooks)/api";

export default function SignUp() {
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    emailValid: false,
    phoneValid: false,
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      console.log("profile image selected");
      const file = files[0];

      if (file) {
        const formData = new FormData();
        formData.append("profileImage", file);

        setNewUserData({
          ...newUserData,
          profileImage: formData,
        });
      };
    } else {
      setNewUserData({...newUserData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newUserData.password === confirmPassword) {
      setErrorText("Passwords do not match");
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        setErrorText('');

        setNewUserData({...newUserData, password: '' });
        return setConfirmPassword('');
      }, 3000);
    }

    try {
      const response = await api.post('/users/signup', newUserData)

      if (response.status === 201) {
        setIsSuccess(true);
        setSuccessText(response.data.message);

        setTimeout(() => {
          setIsSuccess(false);
          setSuccessText('');
          return navigate('/validate-email', { state: { newUserData } });
        }, 3000);
      } else {
        setErrorText(response.message);
        setIsError(true);

        setTimeout(() => {
          setIsSuccess(false);
          return setSuccessText('');
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

  return (
    <div className="flex flex-col items-center justify-start w-full h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[60%] h-24 mt-3 tracking-widest">
        <h1 className="font-inkfree text-[#C6C6C6] text-3xl font-bold italic txtShadow2">
          Let&#39;s Get You Started With An Account!
        </h1>
      </div>

      <div className="flex flex-col items-center justify-evenly w-full h-full">
        <form className="flex flex-col items-center justify-evenly w-full h-full" onSubmit={handleSubmit}>
          <div className="flex flex-row items-center justify-evenly w-[80%] h-[700px]">
            <div className="flex flex-col items-center justify-evenly w-[45%] h-full border-foreground border-2 rounded-lg shadow-foreground shadow-lg">
              <input type="text" 
                     id="firstName" 
                     name="firstName" 
                     placeholder="First Name" 
                     value={newUserData.firstName} 
                     onChange={handleChange} 
                     required 
                     min="1"
                     className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none"
                     title="Name Must Use The 26-Letter English Alphabet and be At Least 1 Character Long" />

              <input type="text" 
                     id="lastName" 
                     name="lastName" 
                     placeholder="Last Name" 
                     value={newUserData.lastName} 
                     onChange={handleChange} 
                     required
                     min="1" 
                     className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none"
                     title="Name Must Use The 26-Letter English Alphabet and be At Least 1 Character Long" />

              <input type="email" 
                     id="email" 
                     name="email" 
                     placeholder="Email Address" 
                     value={newUserData.email} 
                     onChange={handleChange} 
                     required 
                     className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none"
                     title="Email Must Follow Format: email@email.com" />

              <input type="text" 
                     id="phoneNumber" 
                     name="phoneNumber" 
                     placeholder="Phone Number" 
                     value={newUserData.phoneNumber} 
                     onChange={handleChange} 
                     required
                     className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none"
                     title="Phone Number Must Be Digits 0-9" />
            </div>

            <div className="flex flex-col items-center justify-evenly w-[45%] h-full border-foreground border-2 rounded-lg shadow-foreground shadow-lg">
              <input type="text" 
                     id="username" 
                     name="username" 
                     placeholder="Create Username" 
                     value={newUserData.username} 
                     onChange={handleChange} 
                     required 
                     min="8"
                     max="12"
                     className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none"
                     title="Username Must Be At Least 8 Characters Long But No More Than 12 Characters Long. Usernames May Use Upper-Case Letters, Lower-Case Letters, Underscore '_', Hyphen '-', or Digits 0-9" />

              <input type="text" 
                     id="password" 
                     name="password" 
                     placeholder="Create Password" 
                     value={newUserData.password} 
                     onChange={handleChange} 
                     required 
                     min="8"
                     max="12"
                     className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none"
                     title="Password Must Be At Least 8 Characters Long But No More Than 12 Characters Long. Passwords Required At Least 1 Upper-Case Letter, 1 Lower-Case Letter, and May Use 1 Underscore '_' or Hyphen '-', and Digits 0-9" />

              <input type="text" 
                     id="confirmPassword" 
                     name="confirmPassword" 
                     placeholder="Confirm Password" 
                     value={confirmPassword} 
                     onChange={(e) => setConfirmPassword(e.target.value)} 
                     required 
                     min="8"
                     max="12"
                     className="font-inkfree text-[#C6C6C6] w-[400px] text-2xl tracking-widest placeholder-[#C6C6C6] bg-transparent border-2 border-[#C6C6C6] rounded h-[60px] text-center hover:text-foreground hover:placeholder-foreground hover:border-foreground hover:bg-transparent focus:text-gray-400 focus:bg-gray-800 focus:border-foreground focus:outline-none"
                     title="Password Must Be At Least 8 Characters Long But No More Than 12 Characters Long. Passwords Required At Least 1 Upper-Case Letter, 1 Lower-Case Letter, and May Use 1 Underscore '_' or Hyphen '-', and Digits 0-9" />
            </div>
          </div>

          {isError && (<p className="text-red-500 text-center text-2xl w-[40%] mt-10">{errorText}</p>)}

          {isSuccess && (<p className="text-green-500 text-center text-2xl w-[40%] mt-10">{successText}</p>)}

          <div className="flex flex-row items-center justify-evenly w-full h-16">
            <button type="button" onClick={() => navigate("/")} className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">
              Back
            </button>
            
            <button type="submit" className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
