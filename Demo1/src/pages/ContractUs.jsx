import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4 text-gray-600">Feel free to reach out to us at contact@example.com</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link>
      </div>
    </div>
  );
}

export default ContactUs;