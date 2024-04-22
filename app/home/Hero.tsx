import { FiChevronDown } from "react-icons/fi";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import Image from "next/image";
import HeroTabs from "./HeroTabs";


const HomeMain = () => {
  return (
    <div className="flex flex-col justify-evenly flex-col bg-indigo-400 -mt-10 md:mt-0 min-h-dvh md:min-h-screen">
      <div className="flex flex-row -mt-10">
        <div className="flex flex-col w-3/5 justify-evenly flex-grow text-center items-center gap-12">
          <div className="flex flex-col justify-evenly gap-12 w-full items-center">
            <h1 className="font-medium text-white">
              <span className="text-2xl">Hello, I&apos;m</span> <br />
              <span className="text-6xl">Rafael Diaz</span> <br />
              <span className="text-3xl">a software developer</span>
            </h1>
            <HeroTabs></HeroTabs>
          </div>

          <FiChevronDown
            className="text-white text-4xl self-center md:hidden"
            onClick={() => scrollToSection("about-section")}
          />
        </div>
        <div className="flex-col flex-grow w-2/5 p-10 hidden md:flex">
          <h1 className="text-white text-2xl text-center mb-5">
            Placeholder Project
          </h1>
          <Link href="/about" passHref>
            <div className="flex flex-col justify-center transition duration-300 ease-in-out transform hover:scale-105">
              <Image
                src="/render.webp"
                alt="Vercel Logo"
                width="572"
                height="272"
                layout="responsive"
                style={{ objectFit: "contain" }}
              />
              <span className="text-center text-white mt-8">
                Placeholder, app not yet web-deployable
              </span>
            </div>
          </Link>
        </div>
      </div>
      <FiChevronDown
        className="text-white text-4xl self-center hidden md:block"
        onClick={() => scrollToSection("about-section")}
      />
    </div>
  );
};

export default HomeMain;


{/* <div className="grid grid-cols-4 gap-0 md:gap-4">
            {technologies_dict.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <tech.Icon className="text-white text-4xl" />
                <span className="text-white text-lg">{tech.name}</span>
              </div>
            ))}
          </div> */}