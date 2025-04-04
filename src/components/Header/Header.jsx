import React from 'react';

const Header = () => {
  return (
    <div className="header relative z-30"> {/* Added z-index */}
      <nav className="bg-transparent shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              About
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              Skills
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;