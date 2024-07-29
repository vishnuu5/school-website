import React from 'react';

const Faculty = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Faculty</h1>
      </div>
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Our Faculty Members</h2>
        <ul className="list-disc ml-8">
          <li>John Doe: Principal, M.Ed, 20 years of experience in educational administration.</li>
          <li>Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</li>
          <li>Emily Johnson: English Teacher, M.A. in English, 10 years of teaching experience.</li>
          <li>Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</li>
          <li>Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</li>
          <li>David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default Faculty;
