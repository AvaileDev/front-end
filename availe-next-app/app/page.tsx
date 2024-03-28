"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex justify-between flex-row min-h-screen bg-blue-400">
      <div className="flex flex-col justify-center flex-grow text-center items-center mb-64">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h1 className="font-medium text-white">
            <span className="text-2xl">Hello, I'm</span> <br />
            <span className="text-6xl">Rafael Diaz</span> <br />
            <span className="text-3xl">a software developer</span>
          </h1>
        </div>
        <FiChevronDown
          className="text-white text-4xl cursor-pointer mt-5"
          onClick={() => handleScrollToSection('about-section')}
        />
      </div >
      <div className="flex flex-col flex-grow p-10">
        <div className="relative w-full h-full">
          <Image src="/vercel.svg" alt="Vercel Logo" layout="fill" objectFit="contain" />
        </div>
      </div>
    </main >
  );
}