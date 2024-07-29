import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
      <p className="text-center">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      <p className="text-center mt-4">Vision: To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      <p className="text-center mt-4">Mission: To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      <div className="principal-message mt-8">
        <h2 className="text-2xl font-semibold">Message from the Principal</h2>
        <p className="mt-4">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      </div>
      <div className="infrastructure mt-8">
        <h2 className="text-2xl font-semibold">Infrastructure and Facilities</h2>
        <ul className="mt-4 list-disc list-inside">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
