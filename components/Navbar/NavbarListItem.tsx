import Link from "next/link";

interface NavbarListItemProps {
  href: string;
  text: string;
  isMobileMenu?: boolean;
  isActive: boolean;
  onItemClick?: () => void;
}

const NavbarListItem = ({
  href,
  text,
  isMobileMenu,
  isActive,
  onItemClick,
}: NavbarListItemProps) => {
  const itemClass = `text-xl ${isActive && isMobileMenu ? "font-semibold" : ""}`

  return (
    <li className={itemClass} onClick={onItemClick}>
      <Link href={href}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarListItem;
