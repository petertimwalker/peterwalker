import React from "react";

interface PageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-slate-300 p-8 text-gray-800  dark:bg-gray-800 dark:text-slate-300">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg ">{description}</p>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Page;
