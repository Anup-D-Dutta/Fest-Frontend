import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // State to manage the mobile menu open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define navigation items with their names and corresponding paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login' },

  ];

  // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300  text-white
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand Name */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            AEC 2025
          </Link>

          {/* Desktop Navigation */}
          {/* This div is hidden on small screens (md:hidden) and displayed as a flex container on medium screens and above (md:flex) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative hover:text-pink-400 transition-colors duration-300 group"
              >
                {item.name}
                {/* Underline effect on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger/Close icon) */}
          {/* This button is only visible on small screens (md:hidden) */}
          <button
            className="md:hidden text-white focus:outline-none" // Added focus:outline-none for better accessibility
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} // ARIA label for accessibility
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* This div is conditionally rendered based on isMenuOpen state and is only visible on small screens (md:hidden) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4 border-t border-white/10 flex flex-col items-center space-y-2"> {/* Changed to flex-col and items-center for stacked menu */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block py-2 hover:text-pink-400 transition-colors duration-300 text-lg w-full text-center" // Ensure links take full width and are centered
                onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
