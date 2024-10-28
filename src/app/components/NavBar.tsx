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
    <li className="ml-4">
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
    <nav className="dark:bg-gray-800 bg-slate-300 p-2 border-b dark:border-slate-300 border-gray-800">
      <ul className="flex justify-between list-none m-0 p-0">
        <Link href="/" className={`dark:text-slate-300 text-lg text-gray-800`}>
          Peter Walker
        </Link>
        <div className="flex ">
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
