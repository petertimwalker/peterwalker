import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const GitHub = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    className="text-current"
  >
    <path
      fill="currentColor"
      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.123-.305-.535-1.53.117-3.18 0 0 1.01-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.553 3.3-1.23 3.3-1.23.653 1.65.24 2.875.117 3.18.765.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .317.22.688.825.573C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
    />
  </svg>
);

// const Twitter = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 310 310"
//     width="30"
//     height="30"
//     className="text-current"
//   >
//     <path
//       fill="currentColor"
//       d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
//     />
//   </svg>
// );

const LinkedIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 310 310"
    width="30"
    height="30"
    className="text-current"
  >
    <g>
      <path
        fill="currentColor"
        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
      />
      <path
        fill="currentColor"
        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
      />
      <path
        fill="currentColor"
        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
      />
    </g>
  </svg>
);
const FooterLogo = ({
  logo,
  href,
}: {
  logo: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className="text-gray-800 dark:text-slate-300">{logo}</a>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 dark:bg-gray-800 bg-slate-300 p-2 border-t dark:border-slate-300 border-gray-800">
      <ul className="flex justify-between items-center list-none">
        <div className="flex space-x-4">
          <FooterLogo logo={GitHub} href="/now" />
          <FooterLogo logo={LinkedIn} href="/now" />
          {/* <FooterLogo logo={Twitter} href="/now" /> */}
        </div>
        <li className="ml-auto">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
