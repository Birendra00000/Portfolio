"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavLinks } from "../Data";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="p-2 relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-wlat-100 flex justify-center">
      <div className="flex justify-between w-[85%] items-center">
        <Link
          href="/"
          className="bold-28 capitalize relative text-[25px] font-semibold"
        >
          Biren<span className="text-blue-500">dra</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex md:flex h-full gap-6 px-6 py-3">
          {NavLinks.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className="flex items-center text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
            >
              {item.labels}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <FaBars
          className="lg:hidden cursor-pointer md:hidden"
          onClick={handleClick}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 top-0 shadow-lg transition-transform transform w-full bg-[#00000063] ${
            click ? "translate-x-0" : "translate-x-full"
          } lg:hidden md-hidden`}
        >
          <div
            className="flex justify-start items-center p-4 
           flex-col bg-white w-[60%] h-full"
          >
            <span className="w-full flex justify-end items-end">
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={handleClick}
              />
            </span>
            <ul className="flex flex-col p-4">
              {NavLinks.map((item) => (
                <Link
                  href={item.href}
                  key={item.key}
                  className="text-lg font-medium text-black hover:bg-blue-500  hover:text-white p-1  lg:px-4 lg:py-2 rounded-full transition-all duration-300 w-[120px] flex justify-center"
                  onClick={() => setClick(false)} // Close menu on link click
                >
                  {item.labels}
                </Link>
              ))}
            </ul>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
