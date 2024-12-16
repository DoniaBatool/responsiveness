"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">Avion</div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4">
              <Link href="#" className="px-3 py-2 hover:bg-gray-700 rounded-md">
                Link 1
              </Link>
              <Link href="#" className="px-3 py-2 hover:bg-gray-700 rounded-md">
                Link 2
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 bg-gray-700 rounded-md"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-700">
            <Link
              href="#"
              className="block px-4 py-2 text-base hover:bg-gray-600"
            >
              Link 1
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-base hover:bg-gray-600"
            >
              Link 2
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* Red Div */}
        <div className="bg-red-500 w-full h-48 flex items-center justify-center">
          <p className="text-white text-xl">Red Div</p>
        </div>

        {/* Green and Blue Div */}
        <div className="flex w-full">
          <div className="bg-green-500 w-1/2 h-48 flex items-center justify-center">
            <p className="text-white text-xl">Green Div</p>
          </div>
          <div className="bg-blue-500 w-1/2 h-48 flex items-center justify-center">
            <p className="text-white text-xl">Blue Div</p>
          </div>
        </div>
      </div>
    </>
  );
}
