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
    <main>
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-400 min-h-screen">
        <div>
          <div className="flex flex-col items-center gap-7">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
              <h1 className="text-5xl font-bold text-center text-white">
                Hello! I'm <span className="text-teal-200">Rafael Diaz</span> <br />a software developer</h1>
            </div>
            <FiChevronDown
              className="text-white text-4xl cursor-pointer"
              onClick={() => handleScrollToSection('about-section')}
            />
          </div>
        </div>
      </div >
      <div id="about-section" className="flex align-middle min-h-screen">
        <p>Hello</p>
      </div>
    </main>
  );
}
