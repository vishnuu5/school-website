
import React from 'react';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Welcome to Springdale Public School</h1>
        <p className="mt-4">Where we nurture young minds for a brighter future.</p>
      </div>
      <div className="carousel mt-8">
        <CarouselComponent />
      </div>
      <div className="quick-links mt-8">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="/about" className="text-blue-600 hover:underline">About Us</a></li>
          <li><a href="/admissions" className="text-blue-600 hover:underline">Admissions</a></li>
          <li><a href="/gallery" className="text-blue-600 hover:underline">Gallery</a></li>
          <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
