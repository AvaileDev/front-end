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

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image src={Logo} alt="Logo" width={205} height={75} />
                </Link>
                <div>
                    <ul className="hidden sm:flex">
                        <NavbarListItem href="/about" text="Data Science" />
                        <NavbarListItem href="/about" text="Games" />
                        <NavbarListItem href="/about" text="About" />
                        <NavbarListItem href="/contact" text="Contact" />
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    {isNavOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>

            {isNavOpen && (
                <div className="fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
                    <ul className="md:hidden">
                        <NavbarListItem href="/about" text="Data Science" />
                        <NavbarListItem href="/about" text="Games" />
                        <NavbarListItem href="/about" text="About" />
                        <NavbarListItem href="/contact" text="Contact" />
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar