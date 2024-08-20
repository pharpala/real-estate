import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-4">
    <div className="max-w-7xl mx-auto text-center text-gray-600">
        <p>&copy; 2024 Real Estate. All rights reserved.</p>
        <p className="mt-2">
          Website made by{" "}
          <a
            href="https://pranayharpalani.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Pranay Harpalani
          </a>
        </p>
    </div>
    </footer> 
  )
}

export default Footer
