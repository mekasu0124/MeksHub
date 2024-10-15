"use client";

import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [gameApps, setGameApps] = useState([
    { id: 1, name: "Super Mario Bros. 4", developer: "Nintendo", image: "/images/default.jpg", details: "Super Mario Bros. 4 is a 1996 action-adventure video game developed and published by Nintendo." },
    { id: 2, name: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", image: "/images/default.jpg", details: "A game about a young link and his quest to save the kingdom of hyrule." },
    { id: 3, name: "Minecraft", developer: "Mojang", image: "/images/default.jpg", details: "A game about exploring the world and finding treasures." },
  ]);
  
  const [webApps, setWebApps] = useState([
    { id: 1, name: "Instagram", developer: "Facebook", image: "/images/default.jpg", details: "A social media platform where users can share photos, videos, and stories." },
    { id: 2, name: "YouTube", developer: "Google", image: "/images/default.jpg", details: "A video-sharing platform where users can upload, watch, and share videos." },
    { id: 3, name: "Discord", developer: "Discord", image: "/images/default.jpg", details: "A voice-and-text chat platform where users can communicate with others." },
  ]);

  const [desktopApps, setDesktopApps] = useState([
    { id: 1, name: "Visual Studio Code", developer: "Microsoft", image: "/images/default.jpg", details: "A cross-platform source code editor developed by Microsoft." },
    { id: 2, name: "Google Chrome", developer: "Google", image: "/images/default.jpg", details: "A free and open-source web browser developed by Google." },
    { id: 3, name: "Notepad++", developer: "Notepad++ Team", image: "/images/default.jpg", details: "A free source code editor and notepad replacement." },
  ]);

  const displayGames = () => {
    return gameApps.map((game) => {
      return (
        <div key={game.id} className="flex flex-col items-center justify-evenly h-[300px] w-[350px] p-2 bg-bg2 border-2 border-fg rounded-lg">
          <Image src={game.image} alt={game.developer} width={100} height={100} className="rounded-lg" />
          <h3 className="font-caveat font-bold italic text-fg text-sm text-center tracking-widest">{game.name}</h3>
          <p className="font-caveat italic tracking-widest text-fg">Developed By: {game.developer}</p>
          <p className="font-caveat italic tracking-widest text-black text-sm bg-gray-400 rounded w-[90%] h-[80px] overflow-y-auto p-2">{game.details}</p>
        </div>
      );
    });
  };

  const displayWebApps = () => {
    return webApps.map((webApp) => {
      return (
        <div key={webApp.id} className="flex flex-col items-center justify-evenly h-[300px] w-[350px] bg-bg2 border-2 border-fg rounded-lg">
          <Image src={webApp.image} alt={webApp.developer} width={100} height={100} className="rounded-lg" />
          <h3 className="font-caveat font-bold italic text-fg text-sm text-center tracking-widest">{webApp.name}</h3>
          <p className="font-caveat italic tracking-widest text-fg">Developed By: {webApp.developer}</p>
          <p className="font-caveat italic tracking-widest text-black text-sm bg-gray-400 rounded w-[90%] h-[80px] overflow-y-auto p-2">{webApp.details}</p>
        </div>
      )
    })
  };

  const displayDesktopApps = () => {
    return desktopApps.map((desktopApp) => {
      return (
        <div key={desktopApp.id} className="flex flex-col items-center justify-evenly h-[300px] w-[350px] bg-bg2 border-2 border-fg rounded-lg">
          <Image src={desktopApp.image} alt={desktopApp.developer} width={100} height={100} className="rounded-lg" />
          <h3 className="font-caveat font-bold italic text-fg text-sm text-center tracking-widest">{desktopApp.name}</h3>
          <p className="font-caveat italic tracking-widest text-fg">Developed By: {desktopApp.developer}</p>
          <p className="font-caveat italic tracking-widest text-black text-sm bg-gray-400 rounded w-[90%] h-[80px] overflow-y-auto p-2">{desktopApp.details}</p>
        </div>
      )
    })
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0 flex justify-center items-center flex-col w-full mb-2">
        <div className="flex flex-row items-center justify-center w-full mb-2">
          <Image src='/images/app-icon.jpg' alt="Mek's Hub Icon" width={150} height={50} className="rounded-lg" />

          <div className="flex flex-col items-center justify-center ml-5">
            <h1 className="font-inkfree font-bold italic text-fg text-3xl tracking-widest">Welcome To Mek&#39;s Hub!</h1>
            <h3 className="font-inkfree font-bold italic text-fg text-lg tracking-widest">Your Next Stop For All FOSS Applications</h3>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full h-[50px] border-t-2 border-b-2 border-t-fg border-b-fg">
          <Link href="/" className="font-caveat text-fg text-lg hover:underline">Home</Link>
          <Link href="/about" className="font-caveat text-fg text-lg hover:underline">About</Link>
          <Link href="/team" className="font-caveat text-fg text-lg hover:underline">Our Team</Link>
          <Link href="/login" className="font-caveat text-fg text-lg hover:underline">Login</Link>
          <Link href="/signup" className="font-caveat text-fg text-lg hover:underline">Sign Up</Link>
        </div>
      </header>

      <main className="flex-grow justify-evenly flex-col items-center flex overflow-y-auto">
        <div className="flex flex-col items-center justify-center w-[95%] h-[400px] border-b-2 border-b-fg">
          <div className="flex flex-row items-center justify-start w-full ml-5">
            <h3 className="font-inkfree font-bold text-2xl underline text-fg tracking-wider">Games</h3>
          </div>

          <div className="flex flex-row items-center justify-start w-full gap-4 p-2 overflow-x-auto">
            { displayGames() }
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[95%] h-[400px] border-b-2 border-b-fg">
          <div className="flex flex-row items-center justify-start w-full ml-5">
            <h3 className="font-inkfree font-bold text-2xl underline text-fg tracking-wider">Web Apps</h3>
          </div>

          <div className="flex flex-row items-center justify-start w-full gap-4 p-2 overflow-x-auto">
            { displayWebApps() }
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center w-[95%] h-[400px] border-b-2 border-b-fg">
          <div className="flex flex-row items-center justify-start w-full ml-5">
            <h3 className="font-inkfree font-bold text-2xl underline text-fg tracking-wider">Desktop Apps</h3>
          </div>

          <div className="flex flex-row items-center justify-start w-full gap-4 p-2 overflow-x-auto">
            { displayDesktopApps() }
          </div>
        </div>
      </main>

      <footer className="flex-shrink-0 flex flex-col items-center justify-center">
        <p className="font-caveat text-fg italic">&copy;2024 Mek&#39;s Hub - All Right Reserved</p>
      </footer>
    </div>
  );
}
