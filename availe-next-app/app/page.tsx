"use client";

import HomeMain from "./home/HomeMain";


export default function Home() {
  return (
    <>
      <HomeMain></HomeMain>
      <div id="about-section" className="flex flex-col flex-grow p-10 min-h">
        <h2 className="text-black text-3xl">About Me</h2>
        <p className="text-black text-lg">
          I am a software developer with experience in web development and cloud computing.
        </p>
      </div>
    </>
  );
}