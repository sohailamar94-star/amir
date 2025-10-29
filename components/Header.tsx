
import React, { useState } from 'react';
import { CartIcon, MenuIcon, SearchIcon, UserIcon, XIcon } from './icons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Shop', 'Collections', 'About Us', 'Contact'];

  return (
    <header className="bg-black/30 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              TechBeauty
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </nav>

          {/* Icons and Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-300 hidden sm:block">
              <SearchIcon />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors duration-300 hidden sm:block">
              <UserIcon />
            </button>
            <button className="relative text-gray-300 hover:text-white transition-colors duration-300">
              <CartIcon />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-gray-300 hover:text-white hover:bg-gray-800 p-3 rounded-lg transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
