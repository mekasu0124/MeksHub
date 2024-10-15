"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0 flex justify-start items-center flex-row w-full mb-2">
        <div className="w-[20%] flex flex-col justify-start items-center">
          <button className="font-inkfree font-bold tracking-wider text-fg text-2xl w-[150px] shadow-fg shadow-lg" onClick={() => router.back()}>Back</button>
        </div>
        
        <div className="w-full flex flex-col justify-end items-center">
          <h1 className="font-caveat italic text-fg text-3xl underline tracking-widest">About Mek&#39;s Hub!</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-evenly w-full mt-5">
        <div className="flex flex-col items-center justify-start w-[90%] h-[250px] rounded shadow-fg shadow-md p-2 overflow-y-auto">
          <h3 className="font-caveat font-bold underline text-center text-fg text-2xl tracking-wider">Who Are We?</h3>
          <p className="font-caveat italic tracking-widest text-fg w-[90%] mt-5 text-center">
            We are Mek&#39;s Hub! A group of your average programmers looking to help our community improve their open-source projects.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-[90%] h-[250px] rounded shadow-fg shadow-md p-2 overflow-y-auto">
          <h3 className="font-caveat font-bold underline text-center text-fg text-2xl tracking-wider">What Do We Do?</h3>
          <p className="font-caveat italic tracking widest text-fg w-[90%] mt-5 text-center">
            We help our community by developing applications that are 100% FOSS (Free Open Source Software) that helps developers in their
            development environments, assists the daily non-programming user in automating day-to-day activites, and more.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-[90%] h-[250px] rounded shadow-fg shadow-md p-2 overflow-y-auto">
          <h3 className="font-caveat font-bold underline text-center text-fg text-2xl tracking-wider">Our Community</h3>
          <p className="font-caveat italic tacking-widest text-fg w-[90%] mt-5 text-center">
            Mek&#39;s Hub is a community-driven project that aims to make open-source software more accessible to everyone. We encourage everyone to join and contribute to the project.
            If you&#39;re interested in being apart of something bigger, we encourage you to join our Discord server and share your passion for open-source software.
          </p>
        </div>
      </main>
    </div>
  );
};
