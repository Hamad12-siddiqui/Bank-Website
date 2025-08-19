"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../constant/navbar.txt.js";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-7xl bg-[#1C1C1C] border-2 border-[#262626] flex justify-between items-center py-4 px-6 lg:rounded-full mt-8 relative">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <img src="/images/shape-30.svg" alt="Logo" className="w-10 h-10" />
          <h3 className="text-3xl font-medium">Your Bank</h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 transition rounded-full ${
                pathname === link.href ? "bg-[#262626] text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex justify-center items-center text-white space-x-6">
          <Link href="/Sign Up" className="hover:underline">Sign Up</Link>
          <Link
            href="/Login"
            className="text-black py-3 px-6 rounded-full bg-[#CAFF33]"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full text-white bg-[#1C1C1C] border-t border-[#262626] flex flex-col items-center space-y-4 py-6 md:hidden rounded-b-2xl z-50">
            
            {/* Links */}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)} // close on click
                className={`px-3 py-2 w-[90%] text-center transition rounded-full ${
                  pathname === link.href ? "bg-[#262626] text-white" : "hover:bg-[#333]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Auth */}
            <Link
              href="/Sign Up"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Sign Up
            </Link>
            <Link
              href="/Login"
              onClick={() => setMenuOpen(false)}
              className="text-black py-3 px-6 rounded-full bg-[#CAFF33]"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
