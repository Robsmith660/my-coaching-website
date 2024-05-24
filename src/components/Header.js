import React from 'react';
import logo from '../images/logo.png'; // Import your image

const Header = () => {
  return (
    <header className="bg-black text-black py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Increase the size of the logo */}
            <img src={logo} alt="Logo" className="h-16 w-16 mr-4" />
            <h1 className="text-xl font-bold bg-red text-white p-2">Dylan Oreilly Coaching</h1>
          </div>
          {/* Add a mobile menu toggle button */}
          <button className="block md:hidden focus:outline-none">
            <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <ul className="hidden md:flex">
            <li className="mr-6 text-white"><a href="/home" className="hover:text-red-500">Home</a></li>
            <li className="mr-6 text-white"><a href="/services" className="hover:text-red-500">Services</a></li>
            <li className="mr-6 text-white"><a href="/about" className="hover:text-red-500">About</a></li>
            <li><a href="contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
        {/* Mobile menu */}
        <ul className="md:hidden bg-gray-900 text-white mt-2 p-2 rounded-lg">
          <li className="mb-2"><a href="/home" className="block hover:text-red-500">Home</a></li>
          <li className="mb-2"><a href="/services" className="block hover:text-red-500">Services</a></li>
          <li className="mb-2"><a href="/about" className="block hover:text-red-500">About</a></li>
          <li><a href="contact" className="block hover:text-red-500">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
