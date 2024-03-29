import { Main } from 'next/document';
import React from 'react'
import { CiServer } from 'react-icons/ci';
import { FaJava, FaReact, FaAws, FaDocker } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';
import { GoGear } from 'react-icons/go';
import { PiFileSqlLight } from 'react-icons/pi';
import { SiCplusplus, SiWireshark } from 'react-icons/si';
import { TbBrandPython, TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb';
import { scrollToSection } from '@/utils/scrollToSection';
import Link from 'next/link';

const HomeMain = () => {
    const technologies_dict = [
        // Programming Languages
        { name: 'Python', Icon: TbBrandPython },
        { name: 'C++', Icon: SiCplusplus },
        { name: 'Java', Icon: FaJava },
        { name: 'TypeScript', Icon: TbBrandTypescript },

        // Frontend Technologies
        { name: 'React', Icon: FaReact },
        { name: 'Next.js', Icon: TbBrandNextjs },

        // Backend and Infrastructure
        { name: 'AWS', Icon: FaAws },
        { name: 'Linux', Icon: CiServer },
        { name: 'Docker', Icon: FaDocker },

        // Development Tools and Databases
        { name: 'Jenkins', Icon: GoGear },
        { name: 'SQL', Icon: PiFileSqlLight },
        { name: 'Wireshark', Icon: SiWireshark },
    ];

    return (
        <main className="flex justify-between flex-row min-h-screen bg-indigo-400">
            <div className="flex flex-col justify-center flex-grow text-center items-center gap-12">
                <Link href="/about" passHref>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out hover:bg-opacity-25 hover:shadow-xl hover:scale-105">
                        <h1 className="font-medium text-white">
                            <span className="text-2xl">Hello, I'm</span> <br />
                            <span className="text-6xl">Rafael Diaz</span> <br />
                            <span className="text-3xl">a software developer</span>
                        </h1>
                    </div>
                </Link>
                <div className="grid grid-cols-4 gap-4">
                    {technologies_dict.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <tech.Icon className="text-white text-4xl" />
                            <span className="text-white text-lg">{tech.name}</span>
                        </div>
                    ))}
                </div>
                <FiChevronDown
                    className="text-white text-4xl cursor-pointer mt-5"
                    onClick={() => scrollToSection('about-section')} />
            </div>
            <div className="flex flex-col flex-grow p-10 justify-center">
                <img src="/vercel.svg" alt="Vercel Logo" style={{ objectFit: 'contain' }} />
            </div>
        </main>
    )
}

export default HomeMain