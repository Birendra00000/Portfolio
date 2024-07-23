import Link from "next/link";
import React from "react";
import { NavLinks } from "../Data";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="p-2 relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-wlat-100">
      <div className="flex justify-between max-w-full items-center">
        <Link href="/" className="bold-28 capitalize relative">
          Biren<span className="text-blue-500">dra</span>
          <span className="absolute top-[0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10 bg-blue-500"></span>
        </Link>
        <ul className="hidden h-full gap-6 lg:flex px-6 py-3">
          {NavLinks.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className="flex items-center  text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300 "
            >
              {item.labels}
            </Link>
          ))}
        </ul>
        <FaBars className="inline-block cursor-pointer lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
