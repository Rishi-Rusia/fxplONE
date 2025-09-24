import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-extrabold tracking-wide"> <Link to="/">FOXPLORE</Link></h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold relative">
          {/* Destinations Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-gray-600">
              Destinations <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2 w-48">
              <a href="#asia" className="block px-4 py-2 hover:bg-gray-100">Asia</a>
              <a href="#europe" className="block px-4 py-2 hover:bg-gray-100">Europe</a>
              <a href="#america" className="block px-4 py-2 hover:bg-gray-100">America</a>
            </div>
          </div>

          {/* Travel Themes Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-gray-600">
              Travel Themes <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2 w-48">
              <a href="#adventure" className="block px-4 py-2 hover:bg-gray-100">Adventure</a>
              <a href="#luxury" className="block px-4 py-2 hover:bg-gray-100">Luxury</a>
              <a href="#family" className="block px-4 py-2 hover:bg-gray-100">Family</a>
            </div>
          </div>
          <Link to="/gallery" className="hover:text-red-600">Gallery</Link>
          <a href="#offers" className="hover:text-gray-600">Special Offers</a>
          <a href="#sustainable" className="hover:text-gray-600">Sustainable Travel</a>
          <Link to="/about" className="hover:text-gray-600">About Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-6 mt-6 font-semibold text-lg">
          {/* Mobile Dropdowns */}
          <div>
            <button
              onClick={() => toggleDropdown("destinations")}
              className="flex justify-between items-center w-full"
            >
              Destinations <ChevronDown size={18} />
            </button>
            {openDropdown === "destinations" && (
              <div className="ml-4 mt-2 space-y-2 transition-all">
                <a href="#asia" onClick={() => setIsOpen(false)}>Asia</a>
                <a href="#europe" onClick={() => setIsOpen(false)}>Europe</a>
                <a href="#america" onClick={() => setIsOpen(false)}>America</a>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("themes")}
              className="flex justify-between items-center w-full"
            >
              Indian Holidays <ChevronDown size={18} />
            </button>
            {openDropdown === "themes" && (
              <div className="ml-4 mt-2 space-y-2 transition-all">
                <a href="#adventure" onClick={() => setIsOpen(false)}>Adventure</a>
                <a href="#luxury" onClick={() => setIsOpen(false)}>Luxury</a>
                <a href="#family" onClick={() => setIsOpen(false)}>Family</a>
              </div>
            )}
          </div>
          <a href="#reviews" onClick={() => setIsOpen(false)}>Guest Reviews</a>
          <a href="#inspired" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#offers" onClick={() => setIsOpen(false)}>Special Trips</a>
          <a href="#sustainable" onClick={() => setIsOpen(false)}>International Holidays</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
        </div>
      </div>
    </nav>
  );
}
