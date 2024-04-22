"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarListItem from "./NavbarListItem";
import Logo from "@/public/vercel.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Footer from "@/components/Footer";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNav = () => setIsNavOpen(!isNavOpen);
  const router = useRouter();
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      console.log("click outside");
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const menuClasses = `fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 
                        flex flex-col justify-between transform ${isNavOpen ? "-translate-x-0" : "translate-x-full"} 
                         transition-transform duration-500 ease-in-out`;
  const closeIconClasses = `absolute top-6 right-4 transition-opacity duration-0 ease-in-out ${isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`;

  const nav_dict = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    // { href: "/game", text: "Game Dev" },
    // { href: "/data", text: "Data Science" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white z-10">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">

        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={205} height={75} />
        </Link>

        {/* Desktop navbar */}
        <div>
          <ul className="hidden sm:flex mr-1">
            {nav_dict.map(({ href, text }, index) => (
              <NavbarListItem key={index} href={href} text={text} isActive={pathname === href} />
            ))}
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile navbar */}
      <div className={menuClasses} ref={menuRef}>
        <div className={closeIconClasses} onClick={handleNav}>
          {isNavOpen ? <AiOutlineClose size={25} /> : null}
        </div>
        <ul className="flex flex-col gap-y-6 py-4">
          {nav_dict.map(({ href, text }, index) => (
            <NavbarListItem key={index} href={href} text={text} isActive={pathname === href} onItemClick={handleNav} isMobileMenu={true} />
          ))}
        </ul>
        <div className="mb-4">
          <Footer showText={false} />
        </div>
      </div>
    </nav >
  );
};

export default Navbar;