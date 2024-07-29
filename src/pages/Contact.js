import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <div className="mb-8">
        <p>Springdale Public School</p>
        <p>123 Education Lane, Cityville, State, ZIP Code</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@springdale.edu</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>

      <div className="mt-8">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198752957854!2d144.9631606158489!3d-37.8086747423158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%20Street%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1634766547300!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
