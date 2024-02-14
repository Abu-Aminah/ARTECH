import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">A$R AGROTEC.</h1>
    
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <CiMenuKebab size={20} /> : <IoMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "block md:hidden fixed left-0 top-0 w-[60%] ease-in-out duration-500 border-r border-r-gray-900 h-full bg-[#000300]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
