"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter();

  const [userLoggingIn, setUserLoggingIn] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (userLoggingIn.username.trim() === '' || userLoggingIn.password.trim() === '') {
      alert('Please fill in all fields');
      return;
    } else {
      alert('User Logged In Successfully!');
      console.log(userLoggingIn);
      return;
    };
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0 flex justify-start items-center flex-row w-full mb-2">
        <div className="w-full flex flex-col justify-end items-center">
          <h1 className="font-caveat italic text-fg text-3xl underline tracking-widest">
            Login To Get Starte
          </h1>
        </div>
      </header>

      <main className="flex-grow justify-evenly flex-col items-center flex overflow-y-auto w-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly w-[70%] h-[650px] shadow-fg shadow-lg">
          <div className="flex flex-row items-center justify-evenly w-full mb-2">
            <label htmlFor="username" className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">
              Username
            </label>

            <input type="text"
                   id="username"
                   name="username"
                   value={userLoggingIn.username}
                   onChange={(e) => setUserLoggingIn({ ... userLoggingIn, username: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full mt-2">
            <label htmlFor="password" className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">
              Password
            </label>

            <input type="password"
                   id="password"
                   name="password"
                   value={userLoggingIn.password}
                   onChange={(e) => setUserLoggingIn({...userLoggingIn, password: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row justify-evenly items-center w-full">
            <button type="button" onClick={() => router.back()} className="font-inkfree font-bold text-fg border-fg border-2 rounded-full w-[250px] p-2 text-2xl">Back</button>
            <button type="submit" className="font-inkfree font-bold text-fg border-fg border-2 rounded-full w-[250px] p-2 text-2xl">login</button>
          </div>

          <div className="flex flex-row justify-evenly items-center w-full">
            <button type="button" onClick={() => router.back()} className="font-inkfree font-bold text-fg border-fg border-2 rounded-full w-[250px] p-2 text-2xl">Forgot Password</button>
            <button type="submit" className="font-inkfree font-bold text-fg border-fg border-2 rounded-full w-[250px] p-2 text-2xl">New User</button>
          </div>
        </form>
      </main>
    </div>
  );
};
