import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

import React from "react";
import BlackBar from "../others/BlackBar";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full bg-white p-[18px] ">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold text-black hover:underline"
          >
            javascript Project-Hub
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-black">
            <NavLink to="/" className="hover:text-blue-500 hover:underline">
              Home
            </NavLink>
            <NavLink
              to="/project"
              className="hover:text-blue-500 hover:underline"
            >
              Projects
            </NavLink>
            <NavLink to="/blog" className="hover:text-blue-500 hover:underline">
              Blog
            </NavLink>
            <NavLink to="/faq" className="hover:text-blue-500 hover:underline">
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-blue-500 hover:underline"
            >
              Contact
            </NavLink>
            <NavLink to="/error" className="hover:text-blue-500">
              Newsletter ↗
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-black md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="text-black text-xl  md:hidden flex flex-col items-center mt-2 space-y-2">
            <NavLink to="/" className="hover:text-blue-500 hover:underline">
              Home
            </NavLink>
            <NavLink
              to="/project"
              className="hover:text-blue-500 hover:underline"
            >
              Projects
            </NavLink>
            <NavLink to="/blog" className="hover:text-blue-500 hover:underline">
              Blog
            </NavLink>
            <NavLink to="/faq" className="hover:text-blue-500 hover:underline">
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-blue-500 hover:underline"
            >
              Contact
            </NavLink>
            <NavLink
              to="/error"
              className="hover:text-blue-500 hover:underline"
            >
              Newsletter ↗
            </NavLink>
          </div>
        )}
      </nav>
      <BlackBar />
    </div>
  );
};

export default Navbar;
