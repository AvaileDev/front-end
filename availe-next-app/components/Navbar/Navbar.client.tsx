"use client";

import Image from "next/image"
import Link from "next/link"
import NavbarListItem from "./NavbarListItem.client"
import Logo from "@/public/vercel.svg"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNav = () => setIsNavOpen(!isNavOpen)

    const menuClasses = `fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 
                         transform ${isNavOpen ? "translate-x-0" : "-translate-x-full"} 
                         transition-transform duration-500 ease-in-out`
    const closeIconClasses = `absolute top-6 right-4 transition-opacity duration-0 ease-in-out ${isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`;


    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image src={Logo} alt="Logo" width={205} height={75} />
                </Link>
                <div>
                    <ul className="hidden sm:flex">
                        <NavbarListItem href="/about" text="Data Science" />
                        <NavbarListItem href="/about" text="Game Dev" />
                        <NavbarListItem href="/about" text="About" />
                        <NavbarListItem href="/contact" text="Contact" />
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={menuClasses}>
                <div className={closeIconClasses} onClick={handleNav}>
                    {isNavOpen ? <AiOutlineClose size={25} /> : null}
                </div>
                <ul className="flex flex-col gap-y-4 py-4">
                    <NavbarListItem href="/about" text="Data Science" />
                    <NavbarListItem href="/about" text="Game Dev" />
                    <NavbarListItem href="/about" text="About" />
                    <NavbarListItem href="/contact" text="Contact" />
                </ul>
            </div>
        </nav >
    )
}

export default Navbar