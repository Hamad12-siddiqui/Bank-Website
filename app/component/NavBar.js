"use client"
import React, { useState } from "react";
import Link from "next/link";


const NavBar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-7xl border border-green-50 flex justify-between items-center py-4 px-6 rounded-full mt-8">
        <div className=" flex items-center gap-2 text-white">
          <img src="/images/shape-30.svg" alt="Logo" className="w-10 h-10" />
          <h3 className="text-3xl font-medium">your Bank</h3>
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/landingpage" className="hover:underline">
            Home
          </Link>
          <Link href="/Careers" className="hover:underline">
            Careers
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/Security" className="hover:underline">
            Security
          </Link>
        </div>
        <div className="text-white  space-x-6">
          <Link href="/Sign Up" className="hover:underline"> Sign Up</Link>

          <Link href="/Login" className="text-black py-3 px-6 rounded-full bg-[#CAFF33]">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
