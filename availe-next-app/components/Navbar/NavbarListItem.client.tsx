import Link from 'next/link';

interface NavbarListItemProps {
    href: string
    text: string
    isMobileMenu?: boolean;
    onItemClick?: () => void;
}

const NavbarListItem = ({ href, text, isMobileMenu, onItemClick }: NavbarListItemProps) => {
    const itemClass = isMobileMenu ? "ml-0 text-xl" : "ml-10 hover:border-b text-xl";

    return (
        <Link href={href}>
            <li className={itemClass} onClick={onItemClick}>{text}</li>
        </Link>
    )
}

export default NavbarListItem