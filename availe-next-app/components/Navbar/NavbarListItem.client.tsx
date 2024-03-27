import Link from 'next/link';

interface NavbarListItemProps {
    href: string
    text: string
}

const NavbarListItem = ({ href, text }: NavbarListItemProps) => {
    return (
        <Link href={href}>
            <li className="ml-10 uppercase hover:border-b text-xl">{text}</li>
        </Link>
    )
}

export default NavbarListItem