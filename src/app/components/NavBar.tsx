"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="mx-4">
      <Link href={href} legacyBehavior>
        <a
          className={`dark:text-slate-300 text-lg text-gray-800 ${
            isActive ? "underline underline-offset-8 " : ""
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="dark:bg-gray-800 bg-slate-300 p-4 border-b dark:border-slate-300 border-gray-800">
      <ul className="flex justify-around list-none m-0 p-0">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/now">Now</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
