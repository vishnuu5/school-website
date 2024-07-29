import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Academics</h1>
      </div>
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Curriculum</h2>
        <ul className="list-disc ml-8">
          <li>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</li>
          <li>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
          <li>Senior Secondary (Grades 11-12): Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English; Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
        </ul>
        <h2 className="text-2xl font-semibold">Teaching Methodologies</h2>
        <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        <h2 className="text-2xl font-semibold">Educational Resources</h2>
        <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </div>
    </div>
  );
};

export default Academics;
