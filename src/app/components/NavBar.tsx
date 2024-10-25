import React from "react";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li className="mx-4">
    <Link href={href} legacyBehavior>
      <a className="text-white no-underline text-lg">{children}</a>
    </Link>
  </li>
);

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around list-none m-0 p-0">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/now">Now</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
