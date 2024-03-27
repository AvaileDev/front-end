"use client";

import Image from "next/image"
import Link from "next/link"
import NavbarListItem from "./NavbarListItem.client"
import Logo from "@/public/vercel.svg"
import { AiOutlineMenu } from "react-icons/ai"
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
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar