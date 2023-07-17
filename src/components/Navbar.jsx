"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 capitalize">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg font-bold text-white">Logo</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <Link href="/">
                <span className="ml-4 text-white">welcome</span>
              </Link>
              <Link href="/todos">
                <span className="ml-4 text-white">todos</span>
              </Link>
              <Link href="/user/profile">
                <span className="ml-4 text-white">profile</span>
              </Link>
              <Link href="/user/settings">
                <span className="ml-4 text-white">setings</span>
              </Link>
              <Link href="/login">
                <span className="ml-4 text-white">login</span>
              </Link>
              <Link href="/register">
                <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white transition duration-150 ease-in-out"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <Link href="/">
              <span className="mt-1 block text-white">welcome</span>
            </Link>
            <Link href="/todos">
              <span className="mt-1 block text-white">todos</span>
            </Link>
            <Link href="/user/profile">
              <span className="mt-1 block text-white">profile</span>
            </Link>
            <Link href="/user/settings">
              <span className="mt-1 block text-white">setings</span>
            </Link>
            <Link href="/login">
              <span className="mt-1 block text-white">login</span>
            </Link>
            <Link href="/register">
              <button className="mt-1 px-4 py-2 block w-full text-left bg-blue-500 text-white rounded">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
