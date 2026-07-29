import React from "react";
import { FaBell } from "react-icons/fa";
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import { MaskedManSvgIcons } from "./AllSvgIcons";
import { Link } from "react-router-dom";

function Header({ onToggleSidebar }) {
  return (
    <nav className="sticky top-0 z-30">
      <div className="w-full h-16 md:h-20 bg-[#1A1A1A] flex items-center justify-between px-3 md:px-8">
        <div className="flex items-center gap-2 md:gap-4">
          <button
            className="text-white text-xl lg:hidden p-2"
            onClick={onToggleSidebar}
          >
            <FaBars />
          </button>
          <Link to={"/"} >
          <img className="h-8 cursor-pointer md:h-10" src="/Logo.png" alt="logo" />
          </Link>
        </div>

        <div className="hidden sm:flex items-center rounded-lg border-[#303030] bg-[#303030] border text-white flex-1 max-w-md mx-4">
          <h1 className="text-[#989798] ml-3">
            <FaMagnifyingGlass />
          </h1>
          <input
            className="px-1.5 py-0.5 outline-none w-full ml-1.5 bg-transparent"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-[#303030] flex items-center justify-center p-2 rounded-lg">
            <MaskedManSvgIcons />
          </div>
          <div className="text-[#E3E3E3] justify-center flex items-center bg-[#303030] p-2 rounded-lg">
            <FaBell />
          </div>
          <div className="bg-[#303030] p-1 text-white rounded-xl flex items-center">
            <h2 className="ml-2 hidden md:block">Stellar Interiors</h2>
            <img className="w-8 h-8 rounded-lg ml-2" src="/seller-img.png" alt="img1" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
