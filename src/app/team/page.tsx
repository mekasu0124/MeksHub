"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

export default function Team(){
  const router = useRouter();

  const [meksTeam, setMeksTeam] = useState([
    {
      id: 1,
      name: "Mek",
      roles: ["Software Developer", "UI/UX Designer", "Project Manager"],
      icon: '/images/mek.jpg',
      repo: "https://github.com/mekasu0124",
      bio: "Hi I'm Mek. I have been working with languages such as Python (8+ years), JavaScript (6+ years), and C# (2+ years). I am currently aspiring to be a full stack web developer. I am always looking forward to new opportunities to learn and grow! You can always find me in the communities discord server and I'm almost always making updates to my code on GitHub"
    },
    {
      id: 2,
      name: "KastienDevOp",
      roles: ["Software Developer", "A.I. Specialist", "Full-Stack Developer", "Project Manager"],
      icon: '/images/kata.png',
      repo: "https://github.com/kastiendevop",
      bio: "Some Bio Text Here",
    }
  ]);

  const displayTeam = () => {
    return meksTeam.map((member) => {
      return (
        <div key={member.id} className="flex flex-col items-center justify-evenly h-[500px] w-[450px] bg-bg2 border-2 border-fg rounded-lg p-2">
          <Image src={member.icon} alt={member.name} width={100} height={100} className="rounded-lg" />
          <h3 className="font-caveat font-bold italic text-fg text-base tracking-widest">{member.name}</h3>
          <p className="font-caveat italic text-fg text-sm tracking-widest text-center">
            <Link href={member.repo} target="_blank">{member.repo}</Link>
          </p>
          <p className="font-caveat italic text-fg text-sm tracking-widest text-center">{member.roles.join(", ")}</p>
          <p className="font-caveat italic tracking-widest text-black bg-gray-400 w-[97%] p-2 h-[240px] mt-3 max-h-[240px] overflow-y-auto rounded">{member.bio}</p>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0 flex justify-start items-center flex-row w-full mb-2">
        <div className="w-[20%] flex flex-col justify-start items-center">
          <button className="font-inkfree font-bold tracking-wider text-fg text-2xl w-[150px] shadow-fg shadow-lg" onClick={() => router.back()}>Back</button>
        </div>

        <div className="w-full flex flex-col justify-end items-center">
          <h1 className="font-caveat italic text-fg text-3xl underline tracking-widest">Mek & Friends</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-row items-center justify-evenly w-full flex-wrap mt-5 gap-5 overflow-y-auto">
        { displayTeam() }
      </main>
    </div>
  );
}