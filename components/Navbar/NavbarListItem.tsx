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
  const itemClass = `${isActive ? (isMobileMenu ? "font-semibold " : "") : ""}${isMobileMenu ? "ml-0 text-xl underline" : "ml-10 hover:border-b text-xl"}`;


  return (
    <Link href={href}>
      <li className={itemClass} onClick={onItemClick}>
        {text}
      </li>
    </Link>
  );
};

export default NavbarListItem;
