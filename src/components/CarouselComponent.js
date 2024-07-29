
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src="/images/Annual Sports Day.jpg" alt="Annual Sports Day" />
        <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
      </div>
      <div>
        <img src="/images/Science Exhibition.jpg" alt="Science Exhibition" />
        <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
      </div>
      <div>
        <img src="/images/Cultural Fest.jpg" alt="Cultural Fest" />
        <p className="legend">Cultural Fest - Embracing Diversity and Creativity</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
