import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <Image src="/vercel.svg" alt="Home" height={100} width={100} />
            </Link>
        </nav>
    )
}

export default Navbar