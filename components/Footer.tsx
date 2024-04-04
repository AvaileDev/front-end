import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <a
        href="https://www.linkedin.com/in/rafael-diaz1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-center">
          <CiLinkedin className="text-black text-4xl" />
          <span className="text-black text-lg">LinkedIn</span>
        </div>
      </a>
      <a
        href="https://github.com/availe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-center">
          <FiGithub className="text-black text-4xl" />
          <span className="text-black text-lg">GitHub</span>
        </div>
      </a>
      <Link href="/contact">
        <div className="flex flex-col items-center">
          <MdOutlineMailOutline className="text-black text-4xl" />
          <span className="text-black text-lg">Email</span>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
