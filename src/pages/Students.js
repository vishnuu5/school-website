import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Students</h1>
      </div>
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Life at Springdale</h2>
        <p>Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
        <p>Clubs and Societies: Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <ul className="list-disc ml-8">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
        <h2 className="text-2xl font-semibold">Student Council</h2>
        <ul className="list-disc ml-8">
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </div>
    </div>
  );
};

export default Students;
