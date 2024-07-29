import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Admissions</h1>
      </div>
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Admission Process</h2>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <h2 className="text-2xl font-semibold">Criteria</h2>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        <h2 className="text-2xl font-semibold">Important Dates</h2>
        <ul className="list-disc ml-8">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>
    </div>
  );
};

export default Admissions;
