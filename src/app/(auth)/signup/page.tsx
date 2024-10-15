"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const router = useRouter();

  const [newUserData, setNewUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    profileImage: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (newUserData.password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } else {
      alert('User Created Successfully!');
      console.log(newUserData);
      return;
    };
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0 flex justify-start items-center flex-row w-full mb-2">
        <div className="w-[20%] flex flex-col justify-start items-center">
          <button className="font-inkfree font-bold tracking-wider text-fg text-2xl w-[150px] shadow-fg shadow-lg" onClick={() => router.back()}>Back</button>
        </div>

        <div className="w-full flex flex-col justify-end items-center">
          <h1 className="font-caveat italic text-fg text-3xl underline tracking-widest">Creating A New Account</h1>
        </div>
      </header>

      <main className="flex-grow justify-evenly flex-col items-center flex overflow-y-auto w-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly w-full flex-grow">
          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">First Name</label>
            <input type="text"
                   id="firstName"
                   name="firstName"
                   value={newUserData.firstName}
                   onChange={(e) => setNewUserData({ ...newUserData, firstName: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">Last Name</label>
            <input type="text"
                   id="lastName"
                   name="lastName"
                   value={newUserData.lastName}
                   onChange={(e) => setNewUserData({...newUserData, lastName: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">Email Address</label>
            <input type="email"
                   id="email"
                   name="email"
                   value={newUserData.email}
                   onChange={(e) => setNewUserData({...newUserData, email: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">Phone Number</label>
            <input type="tel"
                   id="phoneNumber"
                   name="phoneNumber"
                   value={newUserData.phoneNumber}
                   onChange={(e) => setNewUserData({...newUserData, phoneNumber: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">Create Username</label>
            <input type="text"
                   id="username"
                   name="username"
                   value={newUserData.username}
                   onChange={(e) => setNewUserData({...newUserData, username: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">Create Password</label>
            <input type="text"
                   id="password"
                   name="password"
                   value={newUserData.password}
                   onChange={(e) => setNewUserData({...newUserData, password: e.target.value })}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">Confirm Password</label>
            <input type="text"
                   id="confirmPassword"
                   name="confirmPassword"
                   value={confirmPassword}
                   onChange={(e) => setConfirmPassword(e.target.value)}
                   required
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row items-center justify-evenly w-full">
            <label className="font-caveat text-xl text-fg text-center tracking-widest w-[20%]">Profile Image</label>
            <input type="file"
                   id="profileImage"
                   name="profileImage"
                   accept="image/*"
                   required
                   onChange={(e) => setNewUserData({ ...newUserData, profileImage: URL.createObjectURL(e.target.files![0]) })}
                   className="font-inkfree text-center bg-gray-600 text-black placeholder-black font-bold text-2xl w-[40%] p-2 rounded-lg" />
          </div>

          <div className="flex flex-row justify-evenly items-center w-full">
            <button type="button" onClick={() => router.back()} className="font-inkfree font-bold text-fg border-fg border-2 rounded-full w-[250px] p-2 text-2xl">Back</button>
            <button type="submit" className="font-inkfree font-bold text-fg border-fg border-2 rounded-full w-[250px] p-2 text-2xl">Create Account</button>
          </div>
        </form>
      </main>
    </div>
  )
}