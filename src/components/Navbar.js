import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Springdale Public School</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/academics" className="hover:underline">Academics</Link>
          <Link to="/admissions" className="hover:underline">Admissions</Link>
          <Link to="/faculty" className="hover:underline">Faculty</Link>
          <Link to="/students" className="hover:underline">Students</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
