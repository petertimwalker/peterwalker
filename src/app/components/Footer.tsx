"use client";

import React from "react";
import Link from "next/link";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="mx-4">
      <Link href={href} legacyBehavior>
        <a className={`dark:text-slate-300 text-lg text-gray-800 }`}>
          {children}
        </a>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 dark:bg-gray-800 bg-slate-300 p-4 border-t dark:border-slate-300 border-gray-800">
      <ul className="flex justify-around list-none m-0 p-0">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/now">Now</FooterLink>
      </ul>
    </nav>
  );
};

export default Footer;
