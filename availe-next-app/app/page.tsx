import Image from "next/image";
import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      <div className="flex items items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-blue-400">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-center text-white">
            Hello! I'm <span className="text-teal-200">Rafael Diaz</span> <br />a software developer</h1>
        </div>
      </div >
    </main>
  );
}
