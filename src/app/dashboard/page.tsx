"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";


export default function Dashboard() {
  const [apps, setApps] = useState([
    { id: 1, name: "Super Mario Bros. 4", developer: "Nintendo", icon: "/images/default.jpg", installed: true },
    { id: 2, name: "Super Mario Odyssey", developer: "Nintendo", icon: "/images/default.jpg", installed: false },
    { id: 3, name: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", icon: "/images/default.jpg", installed: true },
    { id: 4, name: "Super Mario 64", developer: "Nintendo", icon: "/images/default.jpg", installed: false },
    { id: 5, name: "Super Mario Galaxy", developer: "Nintendo", icon: "/images/default.jpg", installed: true },
  ]);

  const showInstalled = () => {
    return apps.filter((app) => app.installed).map((app) => {
      return (
        <div key={app.id} className="flex flex-col items-center justify-evenly h-[300px] w-[350px] bg-bg2 border-2 border-fg rounded-lg">
          <Image src={app.icon} alt={app.name} width={150} height={50} className="rounded-lg" />
          <h3 className="font-caveat font-bold italic text-fg text-sm text-center tracking-widest">{app.name}</h3>
          <p className="font-caveat italic tracking-widest text-fg">Developed By: {app.developer}</p>
        </div>
      );
    });
  };

  const showUninstalled = () => {
    return apps.filter((app) => !app.installed).map((app) => {
      return (
        <div key={app.id} className="flex flex-col items-center justify-evenly h-[300px] w-[350px] bg-bg2 border-2 border-fg rounded-lg">
          <Image src={app.icon} alt={app.name} width={150} height={50} className="rounded-lg" />
          <h3 className="font-caveat font-bold italic text-fg text-sm text-center tracking-widest">{app.name}</h3>
          <p className="font-caveat italic tracking-widest text-fg">Developed By: {app.developer}</p>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0 flex justify-center items-center flex-col w-full mb-2">
        <div className="flex flex-row items-center justify-center w-full mb-2">
          <Image src='/images/default.jpg' alt="Mek's Hub Icon" width={50} height={50} className="rounded-lg" />

          <div className="flex flex-col items-center justify-center ml-5">
            <h1 className="font-inkfree font-bold italic text-fg text-3xl tracking-widest">
              [username]'s Dashbaord
            </h1>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full h-[50px] border-t-2 border-b-2 border-t-fg border-b-fg">
          <Link href="/dashboard" className="font-caveat text-fg text-lg hover:underline">Dashboard</Link>
          <Link href="/library" className="font-caveat text-fg text-lg hover:underline">My Library</Link>
          <Link href="/browse" className="font-caveat text-fg text-lg hover:underline">Browse More</Link>
          <Link href="/profile" className="font-caveat text-fg text-lg hover:underline">Profile</Link>
          <Link href="/settings" className="font-caveat text-fg text-lg hover:underline">Settings</Link>
        </div>
      </header>

      <main className="flex-grow justify-evenly flex-col items-center flex overflow-y-auto">
        <div className="flex flex-col items-center justify-center w-[95%] h-[400px] border-b-2 border-b-fg">
          <div className="flex flex-row items-center justify-start w-full ml-5">
            <h3 className="font-inkfree font-bold text-2xl underline text-fg tracking-wider">In My Library</h3>
          </div>

          <div className="flex flex-row items-center justify-start w-full gap-4 p-2 overflow-x-auto">
            { showUninstalled() }
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[95%] h-[400px] border-b-2 border-b-fg">
          <div className="flex flex-row items-center justify-start w-full ml-5">
            <h3 className="font-inkfree font-bold text-2xl underline text-fg tracking-wider">Installed On My Device</h3>
          </div>

          <div className="flex flex-row items-center justify-start w-full gap-4 p-2 overflow-x-auto">
            { showInstalled() }
          </div>
        </div>
      </main>
    </div>
  );
};
