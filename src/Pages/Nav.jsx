import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Geeki from '../assets/geekinate-logo.webp'
import { IoColorPaletteSharp } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { TfiWindow } from "react-icons/tfi";
import { RiAirplayLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className="bg-[#FFFFFF] font-semibold flex justify-around items-center px-6 h-[90px] text-black shadow-sm relative z-1 max-w-7xl mx-auto">

      {/* 🌟 Logo */}
      <Link to='/'>
      <img src={Geeki} alt="" className="w-[39%] md:w-[50%]" /></Link>

      {/* 📱 MOBILE: Hamburger Icon (visible only on small screens) */}
      <CiMenuBurger
        className="text-2xl md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* 💻 DESKTOP: Menu (visible only on medium & large screens) */}
      <ul className="hidden md:flex gap-11 relative">
  <li className="text-[#575656] cursor-pointer hover:text-green-600">
    <a href="#about">ABOUT</a>
    </li>

  <li className="group relative hover:text-[green] text-[#575656] cursor-pointer flex items-center gap-1 group/parent">SERVICES<FaAngleDown className="transition-transform duration-700 group-hover/parent:rotate-180" />
    <div className="hidden group-hover:flex flex-wrap gap-4 absolute mt-[160px] w-[330px] bg-white border border-gray-300 p-3 rounded-md cursor-pointer h-[130px] group-hover:text-black z-1 transition-transform duration-700">
      <div className="w-[44%] ">
      <p> <Link to='/design'>Design </Link> </p> 
      </div>
      <div className="w-[44%]">
       <p><Link to='/marketing'> Marketing</Link></p> 
      </div>
      <div className="w-[44%]">
        <p><Link to='/tech'> Tech Consultancy</Link></p> 
      </div>
      <div className="w-[44%]">
        <p><Link to='/develop'> Development</Link></p> 
      </div>
    </div>
  </li>

  <li className="text-[#575656] cursor-pointer hover:text-green-600">PORTFOLIO</li>
  <li className="text-[#575656] cursor-pointer hover:text-green-600"
  

  >
    <a href="#contact">CONTACT</a> </li>
</ul>

      {/* 📱 MOBILE: Dropdown Menu (shows when hamburger is clicked) */}
      {showMenu && (
        <ul className="absolute top-[70px] left-0 w-full bg-[#FFFFFF] flex flex-col items-center gap-3 py-3 md:hidden">
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      )}
    </div>
    
    </>
  );
};

export default Nav;