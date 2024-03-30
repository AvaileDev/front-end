"use client";

import HomeMain from "./home/HomeMain";

export default function Home() {
  return (
    <>
      <HomeMain></HomeMain>
      <div id="about-section" className="flex flex-col flex-grow gap-4 p-10 min-h items-center ">
        <div className="text-center leading-7 flex flex-col gap-5">
          <h2 className="text-3xl">About Me</h2>
          <p>
            I am a computer science student that specializes in web development and Linux systems.
            <br />While my main focus lie on those two areas, I also love exploring other areas of computer science.
          </p>
          <p>Below are select projects that I have worked on:</p>
        </div>
      </div>
    </>
  );
}