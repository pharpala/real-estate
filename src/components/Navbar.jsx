import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold text-gray-800">Hardik Mishra</div>

          {/* Desktop Links (hidden on mobile) */}
          <div className="hidden md:flex">
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-4">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-4">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-4">Properties</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-4">Contact</a>
          </div>

          {/* Mobile Contact Button (shown only on mobile) */}
          <div className="md:hidden">
            <a
              href="#"
              className="text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
